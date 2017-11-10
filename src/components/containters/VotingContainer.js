import React from 'react';
import Voting from "../Voting";
import {connect} from "react-redux";
import store from "../Store";
import {GET_VOTING} from "../reducers/VoteReducer";

class VotingContainer extends React.Component {
    componentWillMount() {
        store.dispatch({
            type : GET_VOTING,
            id : Number(this.props.match.params.id)
        })
    }

    render() {
        return(
            <Voting voting={this.props.voting} history={this.props.history}/>
        );
    }
}

const mapStateToProps = (store) => {
    if(store.votingState.voting === null || store.votingState.voting[0] === undefined) {
        return {
            voting : null
        }
    } else {
        return {
            voting: store.votingState.voting[0]
        }
    }
};

export default connect(mapStateToProps)(VotingContainer);