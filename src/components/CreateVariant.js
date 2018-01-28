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
                <div className="mt-30">
                    <button className="button" onClick={this.createVariant}>Добавить</button>
                    <h3 className="validation-message">{this.state.validationMessage}</h3>
                </div>
            </div>
        );
    }
}

export default CreateVariant;