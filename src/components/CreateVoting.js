import React from 'react';
import {Link} from "react-router-dom";
import Variant from "./Variant";
import CreateVariant from "./CreateVariant";
import '../style/css/create-voting.css';

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
        return validationMessage === '';
    }

    createVoting() {
        let valid = this.validation();
        if (valid) {
            let voting = {
                name: this.name.value,
                description: this.description.value,
                creator: JSON.parse(localStorage.user),
                variants: this.state.variants,
                openDate: new Date()
            };
            let data = new FormData();
            let file = this.imageInput.files[0];
            data.append('voting', JSON.stringify(voting));
            console.log(file);
            if (file !== undefined) {
                console.log('add file');
                data.append('file', file);
                data.append('fileName', file.name);
            }
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
            <div className="root root-loaded">
                <div className="container">
                    <div className="row content text-center">
                        <h1>Создать голосование</h1>
                        <div className="row mt-30">
                            <div className="col-sm-3 col-sm-offset-1 text-right">
                                <label>Название</label>
                            </div>
                            <div className="col-sm-5 text-left">
                                <input ref={input => {
                                    this.name = input
                                }} type="text"/>
                            </div>
                        </div>
                        <div className="row mt-30">
                            <div className="col-sm-3 col-sm-offset-1 text-right">
                                <label>Описание</label>
                            </div>
                            <div className="col-sm-5 text-left">
                                <input ref={input => {
                                    this.description = input
                                }} type="text"/>
                            </div>
                        </div>
                        <div className="row mt-30">
                            <div className="col-sm-3 col-sm-offset-1 text-right">
                                <label>Изображение</label>
                            </div>
                            <div className="col-sm-5 text-left">
                                <input ref={input => {
                                    this.imageInput = input
                                }} type="file"/>
                            </div>
                        </div>
                        <h2>
                            Варианты
                            {
                                this.state.showCreateVariant ?
                                    <button className="add-button" onClick={this.hideCreateVariant}>-</button>
                                    :
                                    <button className="add-button" onClick={this.showCreateVariant}>+</button>
                            }
                        </h2>
                        {
                            this.state.variants.map(variant => {
                                return <Variant key={variant.name}
                                                name={variant.name}
                                                description={variant.description}/>
                            })
                        }
                        {
                            this.state.showCreateVariant ?
                                <CreateVariant createVariant={this.addVariant}/> : null
                        }
                        {
                            this.state.validationMessage !== '' ?
                                <div className="row">
                                    <h3 className="col-xs-12 validation-message mt-30">{this.state.validationMessage}</h3>
                                </div> : null
                        }
                        <div className="row mt-30">
                            <div className="col-sm-3 col-sm-offset-3 text-right">
                                <button onClick={this.createVoting} className="button">Создать</button>
                            </div>
                            <div className="col-sm-3 text-left">
                                <Link to="/" onClick={this.returnBack} className="button">Назад</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateVoting;