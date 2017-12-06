import React from 'react';
import Pagination from "../Pagination";
import {connect} from "react-redux";

class PaginationContainer extends React.Component {
    render() {
        return (
            <Pagination currPage={this.props.currPage}
                        pagesCount={this.props.pagesCount}
                        onChangePage={this.props.onChangePage}/>
        );
    }
}

const mapStateToProps = store => {
    return {
        currPage : store.votingState.currPage,
        pagesCount: store.votingState.pagesCount
    }
};

export default connect(mapStateToProps)(PaginationContainer);