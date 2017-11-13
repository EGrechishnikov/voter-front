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
            <Login doLogin={this.doLogin} user={this.props.user}/>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.userState.user
    };
};

export default connect(mapStateToProps)(LoginContainer);