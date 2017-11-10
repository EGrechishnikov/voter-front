import React from 'react';
import {Link} from "react-router-dom";

class VotingList extends React.Component {
    render() {
        return(
            <div>
                <h1>Список голосований</h1>
                <Link to="/create">Создать</Link>
                {
                    this.props.votes.map(function (vote) {
                        return <div key={vote.id}>
                            <h2>{vote.name}</h2>
                            <h3>{vote.description}</h3>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default VotingList;