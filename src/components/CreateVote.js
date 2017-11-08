import React from 'react';
import {Link} from "react-router-dom";

class CreateVote extends React.Component {
    constructor(props) {
        super(props);
        this.createVote = this.createVote.bind(this);
    }

    createVote(event) {
        let vote = null;

        this.props.createVote(vote);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Создать голосование</h1>
                <Link to="/">Назад</Link>
                <form onSubmit={this.createVote}>
                    <input ref={(input) => {this.name = input}} type="text"/>
                    <button>Создать</button>
                </form>
            </div>
        );
    }
}

export default CreateVote;