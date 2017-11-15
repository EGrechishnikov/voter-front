import React from 'react';
import Link from "react-router-dom/es/Link";

class Result extends React.Component {
    render() {
        return (
            <div>
                <Link to={`/voting/${this.props.match.params.id}`}>Назад</Link>
                <h1>Результат</h1>
            </div>
        );
    }
}

export default Result;