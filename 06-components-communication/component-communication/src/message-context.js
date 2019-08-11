import {createContext} from 'react';

// string
// { message: ''}
const MessageContext = createContext({ message: 'first value'});
export default MessageContext;