import React from 'react';
import {Route, Switch} from "react-router-dom";
import CreateVotingContainer from "./containters/CreateVotingContainer";
import {USER_REMOVE} from "./reducers/UsersReducer";
import store from './Store';
import VotingListContainer from "./containters/VotingListContainer";
import VotingContainer from "./containters/VotingContainer";
import {CLEAR_MY_VOTES} from "./reducers/VoteReducer";


export default class Home extends React.Component {
    static doLogout() {
        store.dispatch({
            type: USER_REMOVE
        });
        store.dispatch({
            type: CLEAR_MY_VOTES
        });
    }

    render() {
        return (
            <div>
                <button onClick={Home.doLogout}>Выйти</button>
                <Switch>
                    <Route exact path="/" component={VotingListContainer}/>
                    <Route path="/create" component={CreateVotingContainer}/>
                    <Route path='/voting/:id' component={VotingContainer}/>
                </Switch>
            </div>
        );
    }
}