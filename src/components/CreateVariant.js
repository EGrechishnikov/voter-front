import React from 'react';

class CreateVariant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {validationMessage: ''};
        this.createVariant = this.createVariant.bind(this);
    }

    createVariant() {
        if (this.name.value.length > 0) {
            this.props.createVariant({
                name: this.name.value,
                description: this.description.value
            });
        } else {
            this.setState({validationMessage: 'Введите название'});
        }
    }

    render() {
        return (
            <div>
                <label>Название</label><input ref={(input) => {
                this.name = input
            }} type="text"/>
                <label>Описание</label><input ref={(input) => {
                this.description = input
            }} type="text"/>
                <button onClick={this.createVariant}>Добавить</button>
                <h3>{this.state.validationMessage}</h3>
            </div>
        );
    }
}

export default CreateVariant;