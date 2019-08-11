import React, {createRef} from 'react';
import SuperForms from '../compositions/SuperForm';

// render props
export default class Login extends React.Component {
    render() {
         return (
            <SuperForms 
                initialValues={ {email: 'yariv@nerdeez.com', password: '12345678'} }
            >
                {
                    (handleChange, values) => {
                        return (
                            <form noValidate >
                                <div className="form-group">
                                    <input
                                        value={values.email}
                                        onChange={handleChange}
                                        placeholder="email"
                                        className="form-control"
                                        type="email" 
                                        name="email" />
                                </div>
                                
                                <div className="form-group">
                                    <input 
                                        value={values.password}
                                        onChange={handleChange}
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
                        );
                    }
                }
            </SuperForms>
        );
    }
}