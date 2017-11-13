import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: Math.floor((new Date(this.props.border) - new Date()) / 1000)};
        this.timer = this.timer.bind(this);
    }

    componentWillMount() {
        if (this.state.seconds < 0) {
            this.props.closeVoting();
        }
    }

    componentDidMount() {
        this.timer = setInterval(this.timer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    timer() {
        if (this.state.seconds >= 0) {
            this.setState({seconds: this.state.seconds - 1});
        } else {
            clearInterval(this.timer);
            this.props.closeVoting();
        }
    }

    static formatNumber(number) {
        number = Math.floor(number);
        if(String(number).length < 2) {
            number = '0' + number;
        }
        return number;
    }

    render() {
        let seconds = this.state.seconds;
        let hour = Timer.formatNumber(seconds / 3600);
        let min = Timer.formatNumber((seconds - hour * 3600) / 60);
        let sec = Timer.formatNumber(seconds - (hour * 3600 + min * 60))
        return (
            <div>
                До конца голосования осталось {hour}:{min}:{sec}
            </div>
        );
    }
}

export default Timer;