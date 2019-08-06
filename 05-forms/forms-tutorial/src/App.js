import React from 'react';
import './App.css';
import Login from './components/Login';
import LoginControlled from './components/LoginControlled';
import RegisterControlled from './components/Register';

function App() {
  return (
    <div className="App">  
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-6">
            <h1>How to deal with forms with React?</h1>

            <Login className="mt-5" />

            <LoginControlled />

            <RegisterControlled />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
