import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloYariv from './components/HelloWorld';
import HelloClass from './components/HelloWorldClass';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Function components</h1>

        <HelloYariv message={ {hello: 'hello from property of parent'} } />
      </div>

      <div>
        <h1>class components</h1>

        <HelloClass msg="hello class fromp parent!" />

        <Timer />
      </div>



      
    </div>
  );
}

export default App;
