import React from 'react';
import {Link} from "react-router-dom";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(event) {
        let login = this.login.value;
        let password = this.password.value;
        if (this.props.validation(login, password)) {
            let user = {
                login: login,
                password: password
            };
            this.props.doLogin(user);
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row header-wrapper">
                    <h1>Вход</h1>
                </div>
                <div className="row">
                    <div id="log-reg-buttons" className="col-sm-3">
                        <div>
                            <Link disabled className="btn btn-default" to="/login">Вход</Link>
                        </div>
                        <div>
                            <Link className="btn btn-default" to="/reg">Регистрация</Link>
                        </div>
                    </div>
                    <div className="col-sm-6 col-sm-offset-2 form">
                        <form onSubmit={this.submit} className="form-horizontal">
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Логин</label>
                                <div className="col-sm-10">
                                    <input ref={(input) => {
                                        this.login = input;
                                    }} type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label">Пароль</label>
                                <div className="col-sm-10">
                                    <input ref={(input) => {
                                        this.password = input;
                                    }} type="password" className="form-control"/>
                                </div>
                            </div>
                            <div className="center">
                                <p>{this.props.validationMessage}</p>
                                <button className="btn btn-default">Отправить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}