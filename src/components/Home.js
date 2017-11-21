import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import CreateVotingContainer from "./containters/CreateVotingContainer";
import {USER_REMOVE} from "./reducers/UsersReducer";
import store from './Store';
import VotingListContainer from "./containters/VotingListContainer";
import VotingContainer from "./containters/VotingContainer";
import {CLEAR_MY_VOTES} from "./reducers/VoteReducer";
import ResultContainer from "./containters/ResultContainer";
import '../style/css/home.css';


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
                <Switch>
                    <Route path="/list" component={VotingListContainer}/>
                    <Route path="/create" component={CreateVotingContainer}/>
                    <Route exact path="/voting/:id" component={VotingContainer}/>
                    <Route path="/voting/:id/result" component={ResultContainer}/>
                </Switch>

                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="col-sm-2 col-sm-offset-1">
                            <Link className="navbar-brand" to="/">VOTER</Link>
                        </div>
                        <div id="login" className="col-sm-3 col-sm-offset-4">Admin</div>
                        <div id="button-wrapper" className="col-sm-1">
                            <Link id="logout-button" to="/" onClick={Home.doLogout}>Выйти</Link>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-2 button-wrapper">
                            <Link className="button" to="/create">Создать</Link>
                        </div>
                        <div className="col-sm-4 col-sm-offset-1 button-wrapper">
                            <Link className="button" to="/list">Голосовать</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}