import React from 'react';
import {Link} from "react-router-dom";

class Voting extends React.Component {
    render() {
        if (this.props.voting === null) {
            return (
                <Link to="/"><h3>Назад</h3></Link>
            );
        }
        return (
            <div>
                <Link to="/">Назад</Link>
                {
                    <div>
                        <h1>Voting №{this.props.voting.id}</h1>
                        <h2>{this.props.voting.name}</h2>
                        <h3>{this.props.voting.description}</h3>
                    </div>
                }
            </div>
        );
    }
}

export default Voting;