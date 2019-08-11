/**
 * needs to get the message from send message
 * needs to print the message
 */

 import React, {useEffect, useState} from 'react';
 import messageService from '../services/message.service';

// class GetMessage extends React.Component {
//    componentDidMount() {
//       const subscription = messageService.messageChannel.subscribe((message) => {
//          setMessage(message);
//       });
//    }

//    componentWillUnmount() {
//       subscription.unsubscribe();
//    }
// }

 export default () => {
   const [message, setMessage] = useState('');

   useEffect(() => {
      const subscription = messageService.messageChannel.subscribe((message) => {
         setMessage(message);
      });

      return function() {
         subscription.unsubscribe();
      }
   });

    return (
         <h1>{message}</h1>
    )
 }