import React from 'react';

export default class SuperForm extends React.Component {
    constructor(props) {
        super(props);

        // initiate the state
        this.state = props.initialValues;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.children(this.handleChange, this.state)
                }
            </div>
        );
    }
}