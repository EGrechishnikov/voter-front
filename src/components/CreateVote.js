import React from 'react';
import {Link} from "react-router-dom";
import Variant from "./Variant";
import CreateVariant from "./CreateVariant";

class CreateVote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {variants: [], showCreateVariant: false};
        this.createVote = this.createVote.bind(this);
        this.addVariant = this.addVariant.bind(this);
        this.showCreateVariant = this.showCreateVariant.bind(this);
        this.hideCreateVariant = this.hideCreateVariant.bind(this);
    }

    createVote() {
        this.props.createVote({
            name: this.name.value,
            description: this.description.value,
            variants: this.state.variants
        });
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
        this.setState({variants: tmpArr, showCreateVariant : false});
    }

    render() {
        return (
            <div>
                <h1>Создать голосование</h1>
                <Link to="/">Назад</Link>
                <input ref={(input) => {this.name = input}} type="text"/>
                <input ref={(input) => {this.description = input}} type="text"/>
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
                <button onClick={this.createVote}>Создать</button>
            </div>
        );
    }
}

export default CreateVote;