import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginContainer from "./containters/LoginContainer";
import RegistrationContainer from "./containters/RegistrationContainer";
import '../style/css/entrance.css';

export default class Entrance extends React.Component {
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
                <Switch>
                    <Route exact path="/" component={LoginContainer}/>
                    <Route path="/reg" component={RegistrationContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                </Switch>
            </div>
        );
    }
}