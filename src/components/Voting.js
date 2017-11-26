import React from 'react';
import {Link} from "react-router-dom";
import Timer from "./Timer";
import Variant from "./Variant";
import "../style/css/voting.css";

class Voting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {alive: true, voted: false};
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
        let voting = this.props.voting;
        if (voting === null) {
            return null;
        }
        let alive = this.state.alive;
        let openDate = new Date(voting.openDate).toLocaleString('ru');
        return (
            <div className="voting-root">
                <div className="container">
                    <div className="row center content">
                        <header>
                            <h1>{voting.name}</h1>
                            <p>by {voting.creator.login}</p>
                            <h3>{voting.description}</h3>
                        </header>
                        {
                            alive ?
                                <Timer border={voting.closingDate}
                                       closeVoting={this.setVotingClosed}/> :
                                <div>
                                    <h3 className="over">Голосование окончено!</h3>
                                    <Link to={`/voting/${voting.id}/result`}>Просмотреть результат</Link>
                                </div>
                        }
                        {
                            voting.imageLink !== null ?
                                <img src={voting.imageLink} alt="Голосование"/> : null
                        }
                        {
                            alive ?
                                voting.variants.map((variant) => {
                                    return (<Variant key={variant.id}
                                                     name={variant.name}
                                                     chosen={variant.id === this.props.chosenVariantId}
                                                     description={variant.description}/>);
                                }) : null
                        }
                        {
                            this.state.voted ?
                                <p>Проголосовано.</p> :
                                alive ?
                                    <div>
                                        <button onClick={this.handleCreateVote.bind(this, voting.variants[0])}>
                                            Вариант1
                                        </button>
                                        <button onClick={this.handleCreateVote.bind(this, voting.variants[1])}>
                                            Вариант2
                                        </button>
                                    </div> : null
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