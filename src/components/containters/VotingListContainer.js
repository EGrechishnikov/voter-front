import React from 'react';
import {connect} from "react-redux";
import VotingList from "../VotingList";

class VotingListContainer extends React.Component {
    render() {
        return(
            <VotingList votes={this.props.votes}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        votes : store.voteState.votes
    };
};

export default connect(mapStateToProps)(VotingListContainer);