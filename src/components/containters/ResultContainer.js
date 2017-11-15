import React from 'react';
import Result from "../Result";
import {connect} from "react-redux";

class ResultContainer extends React.Component {
    render() {
        return(
            <Result/>
        );
    }
}

const mapStateToProps = (store) => {
    return {

    }
};

export default connect(mapStateToProps)(ResultContainer);