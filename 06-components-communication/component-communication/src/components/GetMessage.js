/**
 * needs to get the message from send message
 * needs to print the message
 */

 import React, {useContext} from 'react';
 import MessageContext from '../message-context';

 export default () => {
    const context = useContext(MessageContext)

    return (
         <h1>{context.message}</h1>
    )
 }