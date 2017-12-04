import React from 'react';

class ResultVariant extends React.PureComponent {
    render() {
        let percent = this.props.totalCount > 0 ? 1 / (this.props.totalCount / this.props.count) * 100 : 0;
        let divStyle = {width: `${percent}%`};
        return (
            <div className="col-sm-8 col-sm-offset-2">
                <h2>
                    {this.props.id}:
                </h2>
                <h3>
                    {this.props.count}
                </h3>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow="60"
                         aria-valuemin="0" aria-valuemax="100" style={divStyle}>
                        {percent}%
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultVariant;