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
                        return <h2 key={vote}>{vote}</h2>
                    })
                }
            </div>
        );
    }
}

export default VotingList;