import React from 'react';
import {Route, Switch} from "react-router-dom";
import CreateVotingContainer from "./containters/CreateVotingContainer";
import {USER_REMOVE} from "./reducers/UsersReducer";
import store from './Store';
import VotingListContainer from "./containters/VotingListContainer";
import VotingContainer from "./containters/VotingContainer";


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.doLogout = this.doLogout.bind(this);
    }

    doLogout() {
        console.log('LogOut');
        store.dispatch({
            type: USER_REMOVE
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.doLogout}>Выйти</button>
                <Switch>
                    <Route exact path="/" component={VotingListContainer}/>
                    <Route path="/create" component={CreateVotingContainer}/>
                    <Route path='/voting/:id' component={VotingContainer}/>
                </Switch>

            </div>
        );
    }
}