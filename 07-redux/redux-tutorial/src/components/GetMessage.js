import React from 'react';
import {connect} from 'react-redux';

// SuperComponet = connect(configuration)(Compoent)

 const GetMessage = (props) => {
    const messageFromState = props.messageFromState
    return (
         <h1>{messageFromState}</h1>
    )
 }

 export default connect(
   function(state) {
      return {
         messageFromState: state.helloWorld.message
      }
   }
 )(GetMessage);







