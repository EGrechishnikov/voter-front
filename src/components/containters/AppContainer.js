import {connect} from 'react-redux';
import App from '../App';
import React from "react";
import {USER_ADD, USER_REMOVE} from "../reducers/UsersReducer";
import $ from 'jquery';
import store from '../Store';
import {CLEAR_MY_VOTES, LOAD_MY_VOTES} from "../reducers/VoteReducer";

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {valid: this.props.user !== null};
        this.loadMyVotes = this.loadMyVotes.bind(this);
    }

    componentWillMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        this.setState({valid: user !== null});
        if (user !== null) {
            store.dispatch({
                type: USER_ADD,
                user: user
            });
            this.loadMyVotes(user);
        }
    }

    static logout() {
        store.dispatch({
            type: USER_REMOVE
        });
        store.dispatch({
            type: CLEAR_MY_VOTES
        });
    }

    loadMyVotes(user) {
        $.ajax({
            url: `http://localhost:8080/voter/votes/get/${user.id}`,
            type: 'GET',
            contentType: "application/json",
            success: (votes) => {
                store.dispatch({
                    type: LOAD_MY_VOTES,
                    myVotes: votes
                })
            },
            error: () => {
                console.log('error');
            }
        });
    }

    componentWillReceiveProps(nextState) {
        this.setState({
            valid: (nextState.user !== null && nextState.user !== undefined) || localStorage.getItem('user') !== null
        });
        if(nextState.myVotes === undefined && (nextState.user !== null && nextState.user !== undefined)) {
            this.loadMyVotes(nextState.user);
        }
    }

    render() {
        return <App user={this.props.user} valid={this.state.valid} logout={AppContainer.logout}/>
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.userState.user,
        myVotes: store.voteState.myVotes
    }
};

export default connect(mapStateToProps)(AppContainer);