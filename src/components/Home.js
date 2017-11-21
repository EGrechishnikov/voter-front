import React from 'react';
import {Link} from "react-router-dom";
import '../style/css/home.css';


export default class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-2 button-wrapper">
                            <Link className="button" to="/create">Создать</Link>
                        </div>
                        <div className="col-sm-4 col-sm-offset-1 button-wrapper">
                            <Link className="button" to="/list">Голосовать</Link>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}