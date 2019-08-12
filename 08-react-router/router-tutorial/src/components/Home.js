/**
 * welcome to the homepage
 * 
 * / => Home
 */

import React from 'react';
import Search from './Search';

export default (props) => {
    console.log(props);
    const navigate = () => {
        // how to navigate without Link
        // navigatye with code

        props.history.push('/about');
    }

    return (
        <>
            <h1>
                welcome to the homepage
            </h1>
            <Search />
            <button onClick={navigate}>
                Move to about page
            </button>
        </>
    )
}