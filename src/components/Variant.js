import React from 'react';
import checked from '../style/images/checked.svg';

const Variant = (props) => {
    return(
        <div className="col-sm-6 col-sm-offset-3 variant">
            <h2>{props.name}</h2>
            <h3>{props.description}</h3>
            {
                props.chosen ?
                    <img width="50px" src={checked} alt="Галочка"/>
                    : null
            }
        </div>
    );
};

export default Variant;