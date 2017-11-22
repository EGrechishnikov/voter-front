import React from 'react';
import '../style/css/navigation.css';
import {Link} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        let login = this.props.user !== null ? this.props.user.login : '';
        return (
            <nav className='navbar navbar-inverse navbar-showed'>
                <div className="container-fluid">
                    <div className="col-xs-2 col-sm-offset-1">
                        <Link className="navbar-brand" to="/">VOTER</Link>
                    </div>
                    <div id="login" className="col-xs-3 col-xs-offset-4 not-for-mobile">{login}</div>
                    <div id="logout-button-container" className="col-xs-2">
                        <Link id="logout-button" to="/" onClick={this.props.logout}>Выйти</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;