import React from 'react';
import CreateVoting from "../CreateVoting";
import {connect} from "react-redux";
import $ from 'jquery';

class CreateVoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.createVote = this.createVote.bind(this);
    }

    createVote(vote) {
        const currentContext = this;
        console.log(JSON.stringify(vote));
        $.ajax({
            url: 'http://localhost:8080/voter/voting/add',
            data: JSON.stringify(vote),
            contentType: "application/json",
            type: 'POST',
            success: () => {
                currentContext.props.history.push('/');
            },
            error: () => {
                console.log('error');
            }
        });
    }

    render() {
        return(
            <CreateVoting createVoting={this.createVote} votings={this.props.votings}/>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        votes : store.votingState.votings
    };
};

export default connect(mapStateToProps)(CreateVoteContainer);