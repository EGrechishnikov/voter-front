import React from 'react';
import '../style/css/navigation.css';
import {Link} from "react-router-dom";
import $ from 'jquery';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {navShowed: false};
        this.showHideNav = this.showHideNav.bind(this);
        this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.user !== nextProps.user || this.state.navShowed !== nextState.navShowed;
    }

    showHideNav() {
        let isShowed = this.state.navShowed;
        if (!isShowed) {
            $('.navbar').animate({
                marginTop: 0
            }, 500);
        } else {
            $('.navbar').animate({
                marginTop: "-50px"
            }, 500);
        }
        this.setState({navShowed: !isShowed});
    }

    onMouseLeaveHandle() {
        if(this.state.navShowed) {
            setTimeout(this.showHideNav, 500);
        }
    }

    render() {
        let login = this.props.user !== null ? this.props.user.login : '';
        return (
            <nav className='navbar navbar-inverse navbar-showed' onMouseLeave={this.onMouseLeaveHandle}>
                <div className="container-fluid">
                    <div className="col-xs-2 col-sm-offset-1">
                        <Link className="navbar-brand" to="/">VOTER</Link>
                    </div>
                    <div id="login" className="col-xs-3 col-xs-offset-4 not-for-mobile">{login}</div>
                    <div id="logout-button-container" className="col-xs-2">
                        <Link id="logout-button" to="/" onClick={this.props.logout}>Выйти</Link>
                    </div>
                    <div id={this.state.navShowed ? "up-button" : "down-button"} className="dropdown-button" onClick={this.showHideNav}/>
                </div>
            </nav>

        );
    }
}

export default Navigation;