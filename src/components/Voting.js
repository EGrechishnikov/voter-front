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
        let openDate = new Date(voting.openDate).toLocaleString('ru');
        return (
            <div className="container">
                <div className="row">
                    <header className="center">
                        <h1>{voting.name}</h1>
                        <p>by {voting.creator.login}</p>
                        <h3>{voting.description}</h3>
                    </header>
                    <p>Создано: {openDate}</p>
                    {
                        this.state.alive ?
                            <Timer border={voting.closingDate}
                                   closeVoting={this.setVotingClosed}/> :
                            <h3>Голосование окончено!</h3>
                    }
                    {
                        voting.variants.map((variant) => {
                            return (<Variant key={variant.id}
                                             name={variant.name}
                                             chosen={variant.id === this.props.chosenVariantId}
                                             description={variant.description}/>);
                        })
                    }
                    {
                        this.state.voted ?
                            <p>Проголосовано.</p> :
                            !this.state.alive ?
                                <p>Закрыто</p> :
                                <div>
                                    <button onClick={this.handleCreateVote.bind(this, voting.variants[0])}>Вариант1
                                    </button>
                                    <button onClick={this.handleCreateVote.bind(this, voting.variants[1])}>Вариант2
                                    </button>
                                </div>
                    }
                    {
                        voting.imageLink !== null ?
                            <img src={voting.imageLink} alt="Голосование"/> : null
                    }
                    <Link to={`/voting/${voting.id}/result`}>Результат</Link>
                    <Link to="/list">Назад</Link>
                </div>
            </div>
        );
    }
}

export default Voting;