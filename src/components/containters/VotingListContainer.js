import React from 'react';
import {connect} from "react-redux";
import VotingList from "../VotingList";
import store from "../Store";
import {UPDATE_VOTINGS} from "../reducers/VotingReducer";
import $ from 'jquery';

class VotingListContainer extends React.Component {
    componentWillMount() {
        console.log('will mount');
        this.updateVotingList();
    }

    updateVotingList() {
        console.log('request');
        let page = 1;
        $.ajax({
            url : `http://localhost:8080/voter/voting/all/${page}`,
            type: 'GET',
            contentType: "application/json",
            success : (list) => {
                console.log('update store');
                store.dispatch({
                    type : UPDATE_VOTINGS,
                    votings : list
                })
            },
            error : () => {
                console.log('error message');
            }
        });
    }

    render() {
        return(
            <VotingList votings={this.props.votings}/>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        votings : store.votingState.votings
    };
};

export default connect(mapStateToProps)(VotingListContainer);