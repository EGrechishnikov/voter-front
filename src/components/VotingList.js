import React from 'react';
import {Link} from "react-router-dom";
import '../style/css/voting-list.css';
import PaginationContainer from "./containters/PaginationContainer";

class VotingList extends React.PureComponent {
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
        return (
            <div className={`root ${this.state.divClass}`}>
                <div className="container">
                    <div className="row">
                        <div id="header" className="col-sm-12">
                            <div className="col-sm-5 col-sm-offset-2">
                                <h1>Список голосований</h1>
                            </div>
                            <div id="create-button-wrapper" className="col-sm-1 col-sm-offset-2">
                                <Link to="/create">
                                    <div id="create-button"/>
                                </Link>
                            </div>
                        </div>
                        <div id="list" className="col-sm-12">
                            {
                                this.props.votings.map((voting) => {
                                    return <div key={voting.id} className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 voting">
                                        <Link to={'/voting/' + voting.id}>
                                            <h2 className="name text-center">{voting.name}</h2>
                                            <p className="creator text-center">{voting.creator.login}</p>
                                            <p className="description text-center">{voting.description}</p>
                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <PaginationContainer onChangePage={this.props.onChangePage}/>
                </div>
            </div>
        );
    }
}

export default VotingList;