import React from 'react';

const Variant = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
            <h3>{props.description}</h3>
            <h3>{props.chosen ? 'Выбрано!' : null}</h3>
        </div>
    );
};

export default Variant;