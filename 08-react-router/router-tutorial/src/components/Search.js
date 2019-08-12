/**
 * form with text input
 * when submitting => /about?search=what the user typed
 */

import React from 'react';
import {Formik, Form, Field} from 'formik';
import {withRouter} from 'react-router-dom';

// class Search extends React.Component {
//     handleSubmit = () => {
//         console.log(values);
//         this.props.history.push(`/about?search=${values.search}`);
//     }

//     render() {
//         return (
//             <Formik
//                 onSubmit={this.handleSubmit}
//                 initialValues={ {search: 'search string'} }
//             >
//                 <Form>
//                     <Field type="search" name="search" />
//                     <button type="submit">Search</button>
//                 </Form>
//             </Formik>
//         )
//     }
// }

const Search =  (props) => {
    const handleSubmit = (values) => {
        console.log(values);
        props.history.push(`/about?search=${values.search}`);
    }

    return (
        <Formik
            onSubmit={handleSubmit}
            initialValues={ {search: 'search string'} }
        >
            <Form>
                <Field type="search" name="search" />
                <button type="submit">Search</button>
            </Form>
        </Formik>
    )
}

export default withRouter(Search);