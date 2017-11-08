import React from 'react';
import {Route, Switch} from "react-router-dom";
import VotingList from "./VotingList";
import CreateVoteContainer from "./containters/CreateVoteContainer";
import {USER_REMOVE} from "./reducers/UsersReducer";
import store from './Store';


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
                <Switch>
                    <Route exact path="/" component={VotingList}/>
                    <Route path="/create" component={CreateVoteContainer}/>
                </Switch>
                <button onClick={this.doLogout}>Выйти</button>
            </div>
        );
    }
}