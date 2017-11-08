import React from 'react';
import {Link} from "react-router-dom";

class CreateVote extends React.Component {
    constructor(props) {
        super(props);
        this.createVote = this.createVote.bind(this);
    }

    createVote() {
        this.props.createVote(this.name.value);
    }

    render() {
        return (
            <div>
                <h1>Создать голосование</h1>
                <Link to="/">Назад</Link>
                <input ref={(input) => {this.name = input}} type="text"/>
                <button onClick={this.createVote}>Загрузить</button>
            </div>
        );
    }
}

export default CreateVote;