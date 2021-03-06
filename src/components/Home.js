import React from 'react';
import {Link} from "react-router-dom";
import '../style/css/home.css';
import logo from '../style/images/voter.png';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {divClass: ''};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({divClass: 'home-loaded'})
        }, 100);
    }

    render() {
        return (
            <div id="home" className={this.state.divClass}>
                <div className="container">
                    <div className="row">
                        <div id="logo-wrapper" className="col-xs-10 col-xs-offset-1">
                            <img className="visible-xs img-responsive" src={logo} alt="Logo"/>
                        </div>
                        <div className="col-xs-6 col-xs-offset-3 col-sm-4 col-sm-offset-2 button-wrapper">
                            <Link className="button" to="/create">Создать</Link>
                        </div>
                        <div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-1 button-wrapper">
                            <Link className="button" to="/list">Голосовать</Link>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Home;