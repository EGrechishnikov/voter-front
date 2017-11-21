import React from 'react';
import '../style/css/navigation.css';
import {Link} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        let login = this.props.user !== null ? this.props.user.login : '';
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="col-sm-2 col-sm-offset-1">
                        <Link className="navbar-brand" to="/">VOTER</Link>
                    </div>
                    <div id="login" className="col-sm-3 col-sm-offset-4">{login}</div>
                    <div id="button-wrapper" className="col-sm-1">
                        <Link id="logout-button" to="/" onClick={this.props.logout}>Выйти</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;