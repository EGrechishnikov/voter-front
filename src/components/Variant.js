import React from 'react';

// class Variant extends React.Component {
//     render() {
//         return(
//             <div>
//                 <h2>{this.props.name}</h2>
//                 <h3>{this.props.description}</h3>
//             </div>
//         );
//     }
// }

const Variant = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
            <h3>{props.description}</h3>
        </div>
    );
};

export default Variant;