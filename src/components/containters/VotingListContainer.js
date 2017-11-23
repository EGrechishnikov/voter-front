import React from 'react';
import {connect} from "react-redux";
import VotingList from "../VotingList";
import store from "../Store";
import {SET_PAGES_COUNT, UPDATE_VOTINGS} from "../reducers/VotingReducer";
import $ from 'jquery';

class VotingListContainer extends React.Component {
    componentWillMount() {
        this.updateVotingList();
    }

    onChangePage(number) {
        console.log(`change number ${number}`);
    }

    updateVotingList(page = 1) {
        $.ajax({
            url : `http://localhost:8080/voter/voting/all/${page}`,
            type: 'GET',
            contentType: "application/json",
            success : (list) => {
                store.dispatch({
                    type : UPDATE_VOTINGS,
                    votings : list,
                    currPage : page
                });
                store.dispatch({type : SET_PAGES_COUNT});
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

const mapStateToProps = (store) => {
    return {
        votings : store.votingState.votings
    };
};

export default connect(mapStateToProps)(VotingListContainer);