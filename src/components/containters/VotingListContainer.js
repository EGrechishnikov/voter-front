import React from 'react';
import {connect} from "react-redux";
import VotingList from "../VotingList";
import store from "../Store";
import {UPDATE_VOTES} from "../reducers/VoteReducer";
import $ from 'jquery';

class VotingListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.updateVotingList = this.updateVotingList.bind(this);
    }

    componentWillMount() {
        this.updateVotingList();
    }

    updateVotingList() {
        let page = 1;
        $.ajax({
            url : `http://localhost:8080/voter/voting/all/${page}`,
            type: 'GET',
            contentType: "application/json",
            success : (list) => {
                store.dispatch({
                    type : UPDATE_VOTES,
                    votes : list
                })
            },
            error : () => {
                console.log('error message');
            }
        });
    }

    render() {
        return(
            <VotingList votes={this.props.votes}/>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        votes : store.voteState.votes
    };
};

export default connect(mapStateToProps)(VotingListContainer);