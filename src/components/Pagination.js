import React from 'react';
import Link from "react-router-dom/es/Link";

class Pagination extends React.PureComponent {
    constructor(props) {
        super(props);
        this.calculateButtons = this.calculateButtons.bind(this);
    }

    calculateButtons() {
        let arr = [];
        for (let i=1; i<=this.props.pagesCount; i++) {
            arr.push(
                <li key={i}>
                    {this.props.currPage !== i ?
                        <Link className="pagination-button" to="/list" onClick={this.props.onChangePage.bind(this, i)}>{i}</Link>
                        :
                        <Link className="disabled-pagination-button" to="/list">{i}</Link>
                    }
                </li>
            );
        }
        return arr;
    }

    render() {
        if(this.props.pagesCount  > 1) {
            return(
                <div className="row">
                    <nav className="col-sm-8 col-sm-offset-2 text-center">
                        <ul className="pagination pagination-lg">
                            {this.calculateButtons()}
                        </ul>
                    </nav>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Pagination;