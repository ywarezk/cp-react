import React from 'react';

export default class Timer extends React.Component {
    state = {
        current: 5
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((currentState) => {
                return {
                    current: currentState.current -1
                }
            })
        }, 1000);
    }

    componentDidUpdate() {
        if (this.state.current === 0) {
            this.props.cb();
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>
                <h1>{this.state.current}</h1>
            </div>
        )
    }
}