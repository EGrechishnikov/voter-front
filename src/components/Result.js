import React from 'react';
import Link from "react-router-dom/es/Link";

class Result extends React.Component {
    render() {
        return (
            <div>
                <Link to={`/voting/${this.props.votingId}`}>Назад</Link>
                <h1>Результат</h1>
                {
                    this.props.result !== null ?
                        this.props.result.map((variant) => {
                            return <div key={variant.variantId}>
                                <h2>
                                    {variant.variantId}
                                </h2>
                                <h3>
                                    {variant.count}
                                </h3>
                            </div>
                        }) :
                        null
                }
            </div>
        );
    }
}

export default Result;