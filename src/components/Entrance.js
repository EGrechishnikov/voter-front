import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginContainer from "./containters/LoginContainer";
import RegistrationContainer from "./containters/RegistrationContainer";
import '../style/css/entrance.css';

export default class Entrance extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LoginContainer}/>
                <Route path="/reg" component={RegistrationContainer}/>
                <Route path="/login" component={LoginContainer}/>
            </Switch>
        );
    }
}