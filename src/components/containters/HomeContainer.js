import React from 'react';
import {connect} from 'react-redux';
import store from '../Store';
import Home from '../Home';
import {USER_REMOVE} from "../reducers/UsersReducer";

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.doLogout = this.doLogout.bind(this);
    }

    doLogout() {
        console.log('LogOut');
        store.dispatch({
            type : USER_REMOVE
        });
    }

    render() {
        return(
            <Home doLogout={this.doLogout}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        user: store.userState.user
    };
};

export default connect(mapStateToProps)(HomeContainer);