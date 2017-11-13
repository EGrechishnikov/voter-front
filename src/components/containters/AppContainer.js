import {connect} from 'react-redux';
import App from '../App';
import React from "react";
import {USER_ADD} from "../reducers/UsersReducer";
import store from '../Store';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {valid: this.props.user !== null};
    }

    componentWillMount() {
        let user = JSON.parse(localStorage.getItem('user'));
        this.setState({valid: user !== null});
        if (user !== null) {
            store.dispatch({
                type: USER_ADD,
                user: user
            });
        }
    }

    componentWillReceiveProps(nextState) {
        this.setState({
            valid: (nextState.user !== null && nextState.user !== undefined) || localStorage.getItem('user') !== null
        });
    }

    render() {
        return <App user={this.props.user} valid={this.state.valid}/>
    }
}

const mapStateToProps = (store) => {
    return {
        user: store.userState.user
    }
};

export default connect(mapStateToProps)(AppContainer);