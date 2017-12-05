import React from 'react';
import {Link} from "react-router-dom";
import Timer from "./Timer";
import Variant from "./Variant";
import "../style/css/voting.css";

class Voting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {alive: true, voted: this.props.chosenVariantId !== null};
        this.setVotingClosed = this.setVotingClosed.bind(this);
        this.handleCreateVote = this.handleCreateVote.bind(this);
    }

    componentWillMount() {
        if (this.props.voting === null) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.chosenVariantId !== null) {
            this.setState({voted: true});
        }
    }

    setVotingClosed() {
        this.setState({alive: false});
    }

    handleCreateVote(variant) {
        this.setState({voted: true});
        this.props.createVote(variant);
    }

    render() {
        console.log(this.state.alive);
        console.log(this.state.voted);
        let voted = this.state.voted;
        let voting = this.props.voting;
        if (voting === null) {
            return null;
        }
        let alive = this.state.alive;
        let openDate = new Date(voting.openDate).toLocaleString('ru');
        let chosenVariantId = this.props.chosenVariantId;
        return (
            <div className="voting-root">
                <div className="container">
                    <div className="row text-center content">
                        <header>
                            <h1>{voting.name}</h1>
                            <p>от {voting.creator.login}</p>
                            <h3>{voting.description}</h3>
                        </header>
                        {
                            alive ?
                                <Timer border={voting.closingDate}
                                       closeVoting={this.setVotingClosed}/> :
                                <div>
                                    <h3 className="over">Голосование окончено!</h3>
                                    <div className="mt-30">
                                        <Link className="result-link"
                                              to={`/voting/${voting.id}/result`}>Просмотреть результат</Link>
                                    </div>
                                </div>
                        }
                        {
                            voting.imageLink !== null ?
                                <div className="mt-30">
                                    <img src={voting.imageLink} alt="Голосование"/>
                                </div> : null
                        }
                        {
                            alive ?
                                voting.variants.map((variant) => {
                                    return (<Variant key={variant.id}
                                                     name={variant.name}
                                                     chosen={variant.id === chosenVariantId}
                                                     readyToVoting={alive && !voted}
                                                     action={this.handleCreateVote.bind(this, variant)}
                                                     description={variant.description}/>);
                                }) : null
                        }
                        {
                            voted || chosenVariantId > 0 ?
                                <p>Проголосовано.</p> : null
                        }
                        <div className="col-sm-12 mt-30">
                            <p>Добавлено: {openDate}</p>
                        </div>
                        <div className="col-sm-12 mt-30">
                            <Link className="button" to="/list">Назад</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Voting;