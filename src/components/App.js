import React from 'react';
import '../style/css/bootstrap.min.css';
import '../style/css/common.css';
import '../style/css/standart.css';
import Entrance from "./Entrance";
import {Route, Switch} from "react-router-dom";
import VotingListContainer from "./containters/VotingListContainer";
import CreateVotingContainer from "./containters/CreateVotingContainer";
import VotingContainer from "./containters/VotingContainer";
import ResultContainer from "./containters/ResultContainer";
import Navigation from "./Navigation";
import Home from "./Home";

class App extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.valid ?
                        <div>
                            <Navigation logout={this.props.logout} user={this.props.user}/>
                            <Switch>
                                <Route path="/list" component={VotingListContainer}/>
                                <Route path="/create" component={CreateVotingContainer}/>
                                <Route exact path="/voting/:id" component={VotingContainer}/>
                                <Route path="/voting/:id/result" component={ResultContainer}/>
                                <Route exact path="/" component={Home}/>
                            </Switch>
                        </div> :
                        <Entrance/>
                }
            </div>
        );
    }
}

export default App;