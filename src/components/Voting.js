import React from 'react';
import {Link} from "react-router-dom";
import Timer from "./Timer";
import Variant from "./Variant";

class Voting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {alive: true, voted: false};
        this.setVotingClosed = this.setVotingClosed.bind(this);
        this.handleCreateVote = this.handleCreateVote.bind(this);
    }

    setVotingClosed() {
        this.setState({alive: false});
    }

    handleCreateVote(variant) {
        this.setState({voted : true});
        this.props.createVote(variant);
    }

    render() {
        if (this.props.voting === null) {
            return (
                <Link to="/"><h3>Назад</h3></Link>
            );
        }
        let voting = this.props.voting;
        let openDate = new Date(voting.openDate).toLocaleString('ru');
        return (
            <div>
                <Link to="/">Назад</Link>
                <div>
                    <h1>{voting.name}</h1>
                    <p>От {voting.creator.login}</p>
                    <p>Создано: {openDate}</p>
                    {
                        this.state.alive ?
                            <Timer border={voting.closingDate}
                                   closeVoting={this.setVotingClosed}/> :
                            <h3>Голосование окончено!</h3>
                    }
                    <h3>{voting.description}</h3>
                    {
                        voting.variants.map((variant) => {
                            return (<Variant key={variant.id}
                                             name={variant.name}
                                             description={variant.description}/>);
                        })
                    }
                    {
                        !this.state.alive ?
                            <p>Закрыто</p> :
                            this.state.voted ?
                                <p>Проголосовано.</p> :
                                <div>
                                    <button onClick={this.handleCreateVote.bind(this, voting.variants[0])}>Вариант1</button>
                                    <button onClick={this.handleCreateVote.bind(this, voting.variants[1])}>Вариант2</button>
                                </div>
                    }
                </div>

            </div>
        );
    }
}

export default Voting;