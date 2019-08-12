import React from 'react';
import './App.css';
import SendMessage from './components/SendMessage';
import GetMessage from './components/GetMessage';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h1>Component Communication</h1>
          </div>

            {/* send message */}
            <div className="col-6">
              <SendMessage />
            </div>

            {/* get message */}
            <div className="col-6">
              <GetMessage />
            </div>
          
            <div className="col-6">
              <TodoList />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
