import React from 'react';
import Navigation from "../Navigation";
import {USER_REMOVE} from "../reducers/UsersReducer";
import {CLEAR_MY_VOTES} from "../reducers/VoteReducer";
import store from '../Store.js';

class NavigationContainer extends React.Component {
    static logout() {
        console.log('logout');
        store.dispatch({
            type: USER_REMOVE
        });
        store.dispatch({
            type: CLEAR_MY_VOTES
        });
    }

    render() {
        return(
            <Navigation user={this.props.user} logout={NavigationContainer.logout}/>
        )
    }
}

export default NavigationContainer;