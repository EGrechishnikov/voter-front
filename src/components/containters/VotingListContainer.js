import React from 'react';
import {connect} from "react-redux";
import VotingList from "../VotingList";
import store from "../Store";
import {UPDATE_VOTINGS} from "../reducers/VotingReducer";
import $ from 'jquery';

class VotingListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentWillMount() {
        this.updateVotingList(1);
    }

    onChangePage(number) {
        this.updateVotingList(number);
    }

    updateVotingList(page = 1) {
        $.ajax({
            url : `http://localhost:8080/voter/voting/all/${page}`,
            type: 'GET',
            contentType: "application/json",
            success : answer => {
                store.dispatch({
                    type : UPDATE_VOTINGS,
                    votings : answer.list,
                    recordsCount: answer.recordsCount,
                    currPage : page
                });
            },
            error : () => {
                console.log('error message');
            }
        });
    }

    render() {
        return(
            <VotingList votings={this.props.votings}
                        onChangePage={this.onChangePage}/>
        );
    }
}

const mapStateToProps = store => {
    return {
        votings : store.votingState.votings
    };
};

export default connect(mapStateToProps)(VotingListContainer);