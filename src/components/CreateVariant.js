import React from 'react';

class CreateVariant extends React.Component {
    constructor(props) {
        super(props);
        this.createVariant = this.createVariant.bind(this);
    }

    createVariant() {
        this.props.createVariant({
            name : this.name.value,
            description : this.description.value
        });
    }

    render() {
        return(
            <div>
                <input ref={(input) => {this.name = input}} type="text"/>
                <input ref={(input) => {this.description = input}} type="text"/>
                <button onClick={this.createVariant}>Добавить</button>
            </div>
        );
    }
}

export default CreateVariant;