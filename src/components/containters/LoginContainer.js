import React from 'react';
import store from '../Store';
import $ from 'jquery';
import {USER_ADD} from '../reducers/UsersReducer';
import UserForm from "../UserForm";

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.doLogin = this.doLogin.bind(this);
        this.validation = this.validation.bind(this);
        this.state = {validationMessage: ''};
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.validationMessage !== this.state.validationMessage;
    }

    validation(login, password) {
        if (login === '') {
            this.setState({validationMessage: 'Введите логин'});
            return false;
        } else if (password === '') {
            this.setState({validationMessage: 'Введите пароль'});
            return false;
        } else {
            this.setState({validationMessage: ''});
            return true;
        }
    }

    doLogin(user) {
        $.ajax({
            url: "http://localhost:8080/voter/user/login",
            data: JSON.stringify(user),
            contentType: "application/json",
            type: 'POST',
            success: (user) => {
                if (user !== null && user.id > 0 && user.login !== '') {
                    store.dispatch({
                        type: USER_ADD,
                        user: user
                    });
                } else {
                    this.setState({validationMessage: `Неверный логин или пароль.`});
                }
                this.props.history.push('/');
            },
            error: () => {
                console.log('error');
            }
        });
    }

    render() {
        return (
            <UserForm action={this.doLogin}
                      isLoginPage={true}
                      validationMessage={this.state.validationMessage}
                      validation={this.validation}/>
        );
    }
}

export default LoginContainer;