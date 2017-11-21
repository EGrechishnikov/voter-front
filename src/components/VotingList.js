import React from 'react';
import {Link} from "react-router-dom";

class VotingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {divClass: ''};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({divClass: 'root-loaded'})
        }, 100);
    }

    render() {
        return(
            <div className={`root ${this.state.divClass}`}>
                <h1>Список голосований</h1>
                <Link to="/create">Создать</Link>
                {
                    this.props.votings.map((voting) => {
                        return <div key={voting.id}>
                            <Link to={'/voting/' + voting.id}><h2>{voting.name}</h2></Link>
                            <h3>{voting.description}</h3>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default VotingList;