import React from 'react';
import Voting from "../Voting";
import {connect} from "react-redux";
import store from "../Store";
import $ from 'jquery';
import {GET_VOTING, REMOVE_CURRENT_VOTING} from "../reducers/VotingReducer";
import {ADD_VOTE} from "../reducers/VoteReducer";

class VotingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.createVote = this.createVote.bind(this);
    }

    componentWillMount() {
        store.dispatch({
            type : GET_VOTING,
            id : Number(this.props.match.params.id)
        });
    }

    componentWillUnmount() {
        store.dispatch({
            type : REMOVE_CURRENT_VOTING
        })
    }

    createVote(variant) {
        let vote = {
            date : new Date(),
            voter : this.props.user,
            variant : variant
        };
        $.ajax({
            url : 'http://localhost:8080/voter/vote/add',
            data: JSON.stringify(vote),
            contentType: "application/json",
            type : 'POST',
            success: () => {
                store.dispatch({
                    type : ADD_VOTE,
                    vote : vote
                });
            },
            error : () => {
                console.log('error');
            }
        });
    }

    render() {
        return(
            <Voting voting={this.props.voting} history={this.props.history} createVote={this.createVote}/>
        );
    }
}

const mapStateToProps = (store) => {
    let voting = store.votingState.voting === null || store.votingState.voting[0] === undefined ?
        null :
        store.votingState.voting[0];
    return {
        voting: voting,
        user : store.userState.user
    }
};

export default connect(mapStateToProps)(VotingContainer);