import React from 'react';
import Voting from "../Voting";
import {connect} from "react-redux";
import store from "../Store";
import $ from 'jquery';
import {ADD_MY_VOTE} from "../reducers/VoteReducer";

class VotingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.createVote = this.createVote.bind(this);
    }

    // componentWillMount() {
    //     console.log('mount');
    //     store.dispatch({
    //         type: GET_VOTING,
    //         id: Number(this.props.match.params.id)
    //     });
    // }

    createVote(variant) {
        let vote = {
            date: new Date(),
            voter: this.props.user,
            variant: variant
        };
        $.ajax({
            url: 'http://localhost:8080/voter/vote/add',
            data: JSON.stringify(vote),
            contentType: "application/json",
            type: 'POST',
            success: () => {
                store.dispatch({
                    type: ADD_MY_VOTE,
                    vote: {
                        votingId: this.props.voting.id,
                        variantId: variant.id
                    }
                });
            },
            error: () => {
                console.log('error');
            }
        });
    }

    render() {
        return (
            <Voting voting={this.props.voting}
                    chosenVariantId={this.props.chosenVariantId}
                    history={this.props.history}
                    createVote={this.createVote}/>
        );
    }
}

const mapStateToProps = (store, ownProps) => {
    let votingId = Number(ownProps.match.params.id);
    let voting = store.votingState.votings.filter((voting) => {
        return voting.id === votingId
    })[0];
    voting = voting === undefined ? null : voting;
    let chosenVariantId = null;
    if (voting !== null) {
        let vote = store.voteState.myVotes.filter((vote) => {
            return vote.votingId === votingId;
        })[0];
        chosenVariantId = vote !== undefined ? vote.variantId : null;
    }
    return {
        voting: voting,
        chosenVariantId: chosenVariantId,
        user: store.userState.user
    }
};

export default connect(mapStateToProps)(VotingContainer);