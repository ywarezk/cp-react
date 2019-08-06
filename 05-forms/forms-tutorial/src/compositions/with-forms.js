/**
 * create hoc
 * const SuperLoginForm = withForms({email: '', password: '', ...})(LoginComponent)
 * 
 * 
 */

import React from 'react';


export default function withForms(configurations) {
    
    return function(FormComponent) {

        return class SuperFormComponent extends React.Component {
            
            constructor(props) {
                super(props);
                this.state = configurations;
            }

            setField = (event) => {
                this.setState({
                    [event.target.name]: event.target.value
                })
            }

            handleSubmit = (event, customSubmit) => {
                event.preventDefault();
                // ..validation
                customSubmit(this.state);
            }

            render() {
                return (
                    <FormComponent 
                        values={this.state}
                        onSubmit={this.handleSubmit}
                        handleChange={this.setField} />
                )
            }
        }

    }

}