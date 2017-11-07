import React from 'react';

export default class Registration extends React.Component {
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
            this.props.doReg(user);
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
                <h3>{this.props.validationMessage}</h3>
            </form>
        );
    }
}