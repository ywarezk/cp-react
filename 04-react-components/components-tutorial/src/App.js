import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HelloYariv from './components/HelloWorld';
import HelloClass from './components/HelloWorldClass';
import Timer from './components/Timer';
import TimerFunction from './components/TimerFunction';

function App() {
  const myArray = useState(true);
  const isTimerVisible = myArray[0];
  const setTimerVisible = myArray[1];

  /**
   * remove the timer
   */
  const destroyTimer = function() {
    // setTimerVisible(false);
  }

  const destroyTimerFunction = function() {
    setTimerVisible(false);
  }

  return (
    <div className="App">
      <div>
        <h1>Function components</h1>

        <HelloYariv message={ {hello: 'hello from property of parent'} } />

        {
          isTimerVisible && <TimerFunction cb={destroyTimerFunction} />
        }
        

      </div>

      <div>
        <h1>class components</h1>

        <HelloClass msg="hello class fromp parent!" />
        
        {
          isTimerVisible && <Timer cb={destroyTimer} />
        }
      </div>



      
    </div>
  );
}

export default App;
