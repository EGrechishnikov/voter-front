import React from 'react';
import {Link} from "react-router-dom";
import Variant from "./Variant";
import CreateVariant from "./CreateVariant";

class CreateVoting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {variants: [], showCreateVariant: false, validationMessage: ''};
        this.createVoting = this.createVoting.bind(this);
        this.addVariant = this.addVariant.bind(this);
        this.showCreateVariant = this.showCreateVariant.bind(this);
        this.hideCreateVariant = this.hideCreateVariant.bind(this);
        this.validation = this.validation.bind(this);
        this.returnBack = this.returnBack.bind(this);
    }

    returnBack() {
        this.props.history.goBack();
    }

    validation() {
        let validationMessage = '';
        if (this.name.value.length <= 0) {
            validationMessage = 'Введите название';
        } else if (this.state.variants.length < 2) {
            validationMessage = 'Меньше 2 вариантов';
        } else if (this.state.variants.length > 5) {
            validationMessage = 'Вариантов не может быть больше 5'
        }
        this.setState({validationMessage: validationMessage});
    }

    createVoting() {
        this.validation();
        if (this.state.validationMessage === '') {
            let voting = {
                name: this.name.value,
                description: this.description.value,
                creator: JSON.parse(localStorage.user),
                variants: this.state.variants,
                openDate: new Date()
            };
            let data = new FormData();
            let file = this.imageInput.files[0];
            console.log(voting);
            data.append('voting', JSON.stringify(voting));
            data.append('file', file);
            data.append('fileName', file.name);
            console.log(data.get('voting'));
            this.props.createVoting(data);
        }
    }

    showCreateVariant() {
        this.setState({showCreateVariant: true});
    }

    hideCreateVariant() {
        this.setState({showCreateVariant: false});
    }

    addVariant(variant) {
        let tmpArr = this.state.variants;
        tmpArr.push(variant);
        this.setState({variants: tmpArr, showCreateVariant: false});
    }

    render() {
        return (
            <div>
                <h1>Создать голосование</h1>
                <label>Название</label><input ref={(input) => {
                this.name = input
            }} type="text"/>
                <label>Описание</label><input ref={(input) => {
                this.description = input
            }} type="text"/>
                <label>Изображение</label><input ref={(input) => {
                this.imageInput = input
            }} type="file"/>
                <h2>Варианты</h2>
                {
                    this.state.variants.map((variant) => {
                        return <Variant key={variant.name}
                                        name={variant.name}
                                        description={variant.description}/>
                    })
                }
                {
                    this.state.showCreateVariant ?
                        <div>
                            <CreateVariant createVariant={this.addVariant}/>
                            <button onClick={this.hideCreateVariant}>-</button>
                        </div> :
                        <button onClick={this.showCreateVariant}>+</button>
                }
                <button onClick={this.createVoting}>Создать</button>
                <h3>{this.state.validationMessage}</h3>
                <Link to="/" onClick={this.returnBack}>Назад</Link>
            </div>
        );
    }
}

export default CreateVoting;