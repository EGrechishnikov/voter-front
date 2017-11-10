import {connect} from 'react-redux';
import App from '../App';

const mapStateToProps = (store) => {
    return {
        user : store.userState.user
    }
};

export default connect(mapStateToProps)(App);