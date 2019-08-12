/**
 * welcome to the homepage
 * /about => About
 * 
 */

import React from 'react';
import queryString from 'query-string';

export default (props) => {
    console.log(props);
    const queryObject = queryString.parse(props.location.search);
    return (
        <h1>
            welcome to the about page <br/>

            {
                queryObject['search']
            }
            <br/>
            {
                props.match.params.yariv
            }
        </h1>
    )
}