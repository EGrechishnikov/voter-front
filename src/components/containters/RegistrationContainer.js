import React from 'react';
import store from '../Store';
import $ from 'jquery';
import {USER_ADD} from '../reducers/UsersReducer';
import UserForm from "../UserForm";

class RegistrationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.doReg = this.doReg.bind(this);
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

    doReg(user) {
        $.ajax({
            url: "http://localhost:8080/voter/user/add",
            data: JSON.stringify(user),
            contentType: "application/json",
            type: 'POST',
            success: answer => {
                if (answer === true) {
                    store.dispatch({
                        type: USER_ADD,
                        user: user.login
                    });
                    this.props.history.push('/');
                } else {
                    this.setState({validationMessage: `Логин ${user.login} уже занят.`});
                }
            },
            error: () => {
                console.log('error');
            }
        });
    }

    render() {
        return (
            <UserForm action={this.doReg}
                      isLoginPage={false}
                      validationMessage={this.state.validationMessage}
                      validation={this.validation}/>
        );
    }
}

export default RegistrationContainer;