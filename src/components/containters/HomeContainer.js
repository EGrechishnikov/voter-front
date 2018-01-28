import React from 'react';
import Home from "../Home";
import store from '../Store';
import $ from 'jquery';
import {SET_PROPS} from "../reducers/VotingReducer";

class HomeContainer extends React.Component {
    componentDidMount() {
        $.ajax({
           url: 'http://localhost:8080/voter/voting/settings',
           type: 'GET',
           success: answer => {
               store.dispatch({
                   type: SET_PROPS,
                   recordCountPerPage: answer
               });
           },
            error: () => {
               console.log('error');
            }
        });
    }

    render() {
        return(
            <Home/>
        );
    }
}

export default HomeContainer;