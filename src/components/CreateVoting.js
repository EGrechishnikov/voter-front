import React from 'react';
import {Link} from "react-router-dom";
import Variant from "./Variant";
import CreateVariant from "./CreateVariant";

class CreateVote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {variants: [], showCreateVariant: false, validationMessage: ''};
        this.createVoting = this.createVoting.bind(this);
        this.addVariant = this.addVariant.bind(this);
        this.showCreateVariant = this.showCreateVariant.bind(this);
        this.hideCreateVariant = this.hideCreateVariant.bind(this);
    }

    createVoting() {
        let validationMessage = '';
        if (this.name.value.length <= 0) {
            validationMessage = 'Введите название';
        } else if (this.state.variants.length < 2) {
            validationMessage = 'Меньше 2 вариантов';
        }
        this.setState({validationMessage: validationMessage});
        if (validationMessage === '') {
            this.props.createVoting({
                name: this.name.value,
                description: this.description.value,
                creator : JSON.parse(localStorage.user),
                variants: this.state.variants,
                openDate: new Date()
            });
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
                <Link to="/">Назад</Link>
                <h1>Создать голосование</h1>
                <label>Название</label><input ref={(input) => {
                this.name = input
            }} type="text"/>
                <label>Описание</label><input ref={(input) => {
                this.description = input
            }} type="text"/>
                <h2>Варианты</h2>
                {
                    this.state.variants.map((variant) => {
                        return <Variant key={variant.name} name={variant.name} description={variant.description}/>
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
            </div>
        );
    }
}

export default CreateVote;