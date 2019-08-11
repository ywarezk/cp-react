import React from 'react';
import { Formik, Form, Field} from 'formik';
import {setMessage} from '../redux/actions';
import {connect} from 'react-redux';

const SendMessage = (props) => {
    const setMessageInState = props.setMessageInState;

    const handleSubmit = (values) => {
        console.log(values);

        // function(newMessage) {
        //     store.dispatch(setMessage(newMessage))
        // }
        // store.dispatch(setMessage(values.message))

        setMessageInState(values.message);
    }

    return (
        <Formik
            initialValues={ {message: 'foo bar'} }
            onSubmit={handleSubmit}
        >
            <Form>
                <h1>SendMessage</h1>
                <div className="form-group">
                    <label>Send to brother</label>
                    <Field 
                        type="text" 
                        className="form-control"
                        name="message" />
                </div>
                <div className="form-group">
                    <button 
                        className="btn btn-primary"
                        type="submit">Submit</button>
                </div>
                
            </Form>
        </Formik>
    );

}

export default connect(
    null,
    {
        setMessageInState : setMessage
    }
)(SendMessage)