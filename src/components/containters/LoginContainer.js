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
    }

    doLogin(user) {
        const currentContext = this;
        $.ajax({
            url: "http://localhost:8080/voter/user/login",
            data: JSON.stringify(user),
            contentType: "application/json",
            type: 'POST',
            success: function (answer) {
                console.log(answer);
                if (answer === true) {
                    store.dispatch({
                        type: USER_ADD,
                        user: user.login
                    });
                }
                currentContext.props.history.push('/');
            },
            error: function () {
                console.log('error');
            }
        });
    }

    render() {
        return (
            <Login doLogin={this.doLogin} user={this.props.user}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        user: store.userState.user
    };
};

export default connect(mapStateToProps)(LoginContainer);