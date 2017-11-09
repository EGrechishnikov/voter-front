import React from 'react';
import CreateVoting from "../CreateVoting";
import store from "../Store";
import {ADD_VOTE} from '../reducers/VoteReducer';
import {connect} from "react-redux";

class CreateVoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.createVote = this.createVote.bind(this);
    }

    createVote(vote) {
        store.dispatch({
            type: ADD_VOTE,
            vote : vote
        });
        this.props.history.push('/');
    }

    render() {
        return(
            <CreateVoting createVoting={this.createVote} votes={this.props.votes}/>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        votes : store.voteState.votes
    };
};

export default connect(mapStateToProps)(CreateVoteContainer);