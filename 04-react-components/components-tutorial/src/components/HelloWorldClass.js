import React from 'react';

export default class HelloWorld extends React.Component {
    state = {
        isVisible: true
    }

    // constructor() {
    //     super();
    //     this.toggleVisibility = this.toggleVisibility.bind(this);
    // }

    toggleVisibility = () => {
        // this.state.isVisible = !this.state.isVisible;
        // this.setState({
        //     isVisible: !this.state.isVisible
        // }); // when the state relies on previous state prefer the function

        this.setState(function(currentState) {
            return {
                isVisible: !currentState.isVisible
            }
        });
    }
    
    render() {
        return (
            <div>
                {
                    this.state.isVisible && (
                        <h1>
                            <strong>
                                <u>
                                    {this.props.msg}
                                </u>
                            </strong>
                        </h1>
                    )
                }
                

                <button onClick={this.toggleVisibility}>toggle visibility</button>
            </div>
        )
    }
}

// const componentInstance = new HelloWorld();
// const a = {stam: componentInstance.toggleVisibility};
// a.stam();
// componentInstance.toggleVisibility();