import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Registration from "./Registration";
import LoginContainer from "./containters/LoginContainer";

export default class Entrance extends React.Component {


    render() {
        return (
            <div>
                <h1>Entrance!</h1>
                <Switch>
                    <Route exact path="/" component={LoginContainer}/>
                    <Route path="/reg" component={Registration}/>
                    <Route path="/login" component={LoginContainer}/>
                </Switch>
                <Link to="/reg">Регистрация</Link>
                <Link to="/login">Вход</Link>
            </div>
        );
    }
}