import React, {useState} from 'react';
import './App.css';
import SendMessage from './components/SendMessage';
import GetMessage from './components/GetMessage';

import GetMessageSubscribe from './components/GetMessageSubscribe';
import MessageContext from './message-context';
import SendMessagePublish from './components/SendMessagePublish';

function App() {
  const [message, setMessage] = useState('hello from context');

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h1>Component Communication</h1>
          </div>

          <MessageContext.Provider value={ {message: message, setMessage} }>
            {/* send message */}
            <div className="col-6">
              {/* <SendMessage /> */}

              <SendMessagePublish />
              
            </div>

            {/* get message */}
            <div className="col-6">
              {/* <GetMessage /> */}

              <GetMessageSubscribe />
            </div>
          </MessageContext.Provider>
          
        </div>
      </div>
    </div>
  );
}

export default App;
