import React from 'react';
import {Link} from "react-router-dom";

class UserForm extends React.Component {
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
            this.props.action(user);
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row header-wrapper">
                    <h1>{this.props.isLoginPage ? 'Вход' : 'Регистрация'}</h1>
                </div>
                <div className="row">
                    <div id="log-reg-buttons" className="col-sm-3">
                        <div className="mb-40">
                            {
                                this.props.isLoginPage ?
                                    <Link disabled className="button disabled-button" to="/login">Вход</Link> :
                                    <Link className="button" to="/login">Вход</Link>
                            }
                        </div>
                        <div>
                            {
                                this.props.isLoginPage ?
                                    <Link className="button" to="/reg">Регистрация</Link> :
                                    <Link disabled className="button disabled-button" to="/reg">Регистрация</Link>
                            }
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
                            <div className="center mt-30">
                                <p>{this.props.validationMessage}</p>
                                <button className="button">Отправить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserForm;