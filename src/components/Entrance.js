import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import LoginContainer from "./containters/LoginContainer";
import RegistrationContainer from "./containters/RegistrationContainer";

export default class Entrance extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LoginContainer}/>
                    <Route path="/reg" component={RegistrationContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                </Switch>
                <Link to="/reg">Регистрация</Link>
                <Link to="/login">Вход</Link>
            </div>
        );
    }
}