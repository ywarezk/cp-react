import React from 'react';

export default class Timer extends React.Component {
    state = {
        current: 10
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((currentState) => {
                return {
                    current: currentState.current -1
                }
            })
        }, 1000);
    }

    render() {
        return (
            <h1>{this.state.current}</h1>
        )
    }
}