import React from 'react';
import CreateVote from "../CreateVote";
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
        })
    }

    render() {
        return(
            <CreateVote createVote={this.createVote}/>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        vote : store.voteState.vote
    };
};

export default connect(mapStateToProps)(CreateVoteContainer);