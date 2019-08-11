import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Mail'),
    password: Yup.string().required('This field is a must').min(2, 'too short')
});

export default class Login extends React.Component {
    handleSubmit = (values) => {
        console.log(values)
    }

    render() {
        return (
            <Formik
                initialValues={{email: 'yariv@nerdeez.com', password: '12345678'}}
                onSubmit={this.handleSubmit}
                validationSchema={LoginSchema}
            >
                <Form>
                    <div className="form-group">
                        <Field
                            placeholder="email"
                            className="form-control"
                            type="email" 
                            name="email" />
                        <ErrorMessage 
                            className="alert alert-danger"
                            name="email" 
                            component="div" />
                    </div>
                    
                    <div className="form-group">
                        <Field 
                            placeholder="password"
                            className="form-control"
                            type="password" 
                            required
                            maxLength="10"
                            minLength="2"
                            name="password" />
                        <ErrorMessage name="password" />
                    </div>
                    
                    <button 
                        className="btn btn-primary"
                        type="submit">Login</button>
                </Form>
            </Formik>
            
        )
    }
}