import React from 'react';
import {connect} from 'react-redux';
import store from '../Store';
import $ from 'jquery';
import Login from '../Login';
import {USER_ADD} from '../reducers/UsersReducer';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.doLogin = this.doLogin.bind(this);
        this.validation = this.validation.bind(this);
        this.state = {validationMessage: ''};
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
                if (user !== null && user.id !== 0) {
                    store.dispatch({
                        type: USER_ADD,
                        user: user
                    });
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
            <Login doLogin={this.doLogin}
                   user={this.props.user}
                   validationMessage={this.state.validationMessage}
                   validation={this.validation}/>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.userState.user
    };
};

export default connect(mapStateToProps)(LoginContainer);