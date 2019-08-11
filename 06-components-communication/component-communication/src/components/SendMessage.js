/**
 * contains form
 * with text input
 * we need to send the text input to get message
 */

import React, {useContext} from 'react';
import { Formik, Form, Field} from 'formik';
import MessageContext from '../message-context';

export default () => {
    const context = useContext(MessageContext);

    const handleSubmit = (values) => {
        console.log(values);
        context.setMessage(values.message);
    }

    return (
        <Formik
            initialValues={ {message: 'foo bar'} }
            onSubmit={handleSubmit}
        >
            <Form>
                <h1>SendMessage</h1>
                <Field type="text" name="message" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );

}