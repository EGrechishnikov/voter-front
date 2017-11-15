import React from 'react';
import Result from "../Result";
import {connect} from "react-redux";
import $ from 'jquery';
import {ADD_RESULT, CLEAR_RESULT} from "../reducers/ResultReducer";
import store from '../Store';

class ResultContainer extends React.Component {
    componentWillMount() {
        console.log('req');
        $.ajax({
            url: `http://localhost:8080/voter/voting/result/${this.props.match.params.id}`,
            type: 'GET',
            success: (answer) => {
                store.dispatch({
                    type : ADD_RESULT,
                    result : answer
                })
            },
            error: () => {
                console.log('error');
            }
        });
    }

    componentWillUnmount() {
        store.dispatch({
            type : CLEAR_RESULT
        })
    }

    render() {
        return(
            <Result result={this.props.result} votingId={this.props.match.params.id}/>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        result : store.resultState.result
    }
};

export default connect(mapStateToProps)(ResultContainer);