import React from 'react';
import Link from "react-router-dom/es/Link";
import '../style/css/result.css';
import ResultVariant from "./ResultVariant";

class Result extends React.Component {
    render() {
        return (
            <div className="root root-loaded">
                <div className="container">
                    <div className="row content text-center">
                        <h1>Результат</h1>
                        {
                            this.props.result !== null ?
                                this.props.result.map(variant => {
                                    return <ResultVariant id={variant.variantId}
                                                          key={variant.variantId}
                                                          count={variant.count}
                                                          totalCount={this.props.totalCount}/>
                                }) :
                                null
                        }
                        <div className="row">
                            <div className="col-xs-12 mt-30">
                                <Link className="button" to={`/voting/${this.props.votingId}`}>Назад</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;