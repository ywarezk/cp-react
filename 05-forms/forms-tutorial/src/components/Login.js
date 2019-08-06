import React, {createRef} from 'react';

export default class Login extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.emailInput = createRef();
        this.passwordInput = createRef();
    }

    handleLogin = (event) => {
        event.preventDefault();

        console.log(
            `
                email: ${this.emailInput.current.value}
                password: ${this.passwordInput.current.value}
            `
        );
    }

    render() {
        return (
            <form onSubmit={this.handleLogin} noValidate >
                <div className="form-group">
                    <input
                        ref={this.emailInput} 
                        placeholder="email"
                        className="form-control"
                        type="email" 
                        name="email" />
                </div>
                
                <div className="form-group">
                    <input 
                        ref={this.passwordInput}
                        placeholder="password"
                        className="form-control"
                        type="password" 
                        required
                        maxLength="10"
                        minLength="2"
                        name="password" />
                </div>
                
                <button 
                    className="btn btn-primary"
                     type="submit">Login</button>
            </form>
        )
    }
}