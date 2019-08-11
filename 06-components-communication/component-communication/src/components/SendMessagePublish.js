/**
 * contains form
 * with text input
 * we need to send the text input to get message
 */

import React from 'react';
import { Formik, Form, Field} from 'formik';
import messageService from '../services/message.service';

export default () => {
    const handleSubmit = (values) => {
        console.log(values);
        messageService.messageChannel.next(values.message);
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