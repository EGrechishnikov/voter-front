import React from 'react';
import checked from '../style/images/checked.svg';
import '../style/css/variant.css';

const Variant = (props) => {
    let readyToVoting = props.readyToVoting;
    return (
        <div className="row">
            <div className={`col-sm-6 col-sm-offset-3 variant ${readyToVoting ? 'ready' : null}`}
                 onClick={ readyToVoting ? props.action : undefined}>
                <h2>{props.name}</h2>
                <h3>{props.description}</h3>
                {
                    props.chosen ?
                        <img width="50px" src={checked} alt="Галочка"/>
                        : null
                }
            </div>
        </div>
    );
};

export default Variant;