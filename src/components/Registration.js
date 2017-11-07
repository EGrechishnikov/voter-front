import React from 'react';
import $ from 'jquery';

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.validation = this.validation.bind(this);
        this.state = {validationMessage: ''};
    }

    validation(login, password) {
        if (login === '') {
            this.setState({validationMessage: 'Введите логин'});
            return false;
        } else if (password === '') {
            this.setState({validationMessage: 'Введите пароль'});
            return false;
        } else {
            this.setState({validationMessage: ''});
            return true;
        }
    }

    submit(event) {
        let login = this.login.value;
        let password = this.password.value;
        if (this.validation(login, password)) {
            let user = {
                login: login,
                password: password
            };
            $.ajax({
                url: "http://localhost:8080/voter/user/add",
                data: JSON.stringify(user),
                contentType: "application/json",
                type: 'POST',
                success: function (e) {
                    console.log(e);
                },
                error: function () {
                    console.log('error');
                }
            });
        }

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <h1>Регистрация</h1>
                <label>Логин</label>
                <input ref={(input) => {
                    this.login = input;
                }} type="text"/>
                <label>Пароль</label>
                <input ref={(input) => {
                    this.password = input;
                }} type="password"/>
                <button>Отправить</button>
                <h3>{this.state.validationMessage}</h3>
            </form>
        );
    }
}