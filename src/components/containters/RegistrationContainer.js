import React from 'react';
import {connect} from 'react-redux';
import store from '../Store';
import $ from 'jquery';
import Registration from '../Registration';
import {USER_ADD} from '../reducers/UsersReducer';
import {ENTRANCE_VALIDATION} from "../reducers/ValidationReducer";

class RegistrationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.doReg = this.doReg.bind(this);
        this.validation = this.validation.bind(this);
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
            success: (answer) => {
                if (answer === true) {
                    store.dispatch({
                        type: USER_ADD,
                        user: user.login
                    });
                    this.props.history.push('/');
                } else {
                    store.dispatch({
                        type: ENTRANCE_VALIDATION,
                        validationMessage: `Логин ${user.login} уже занят.`
                    });
                }
            },
            error: () => {
                console.log('error');
            }
        });
    }

    render() {
        return (
            <Registration doReg={this.doReg}
                          user={this.props.user}
                          validationMessage={this.props.validationMessage}
                          validation={this.validation}/>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.userState.user,
        validationMessage: store.validState.validationMessage
    };
};

export default connect(mapStateToProps)(RegistrationContainer);