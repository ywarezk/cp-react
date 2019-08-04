import React from 'react'; // 3rd: react has to be on scope
import './App.css';

function H2() {
  return (
    <h2>
      hello h2
    </h2>
  )

}

function DynamicOptions() {
  // React.Fragment
  return (
    <>
      <option value="1">hello</option>
      <option>world</option>
      <option>foo bar</option>
    </>
  )
}

// <select><option>...</

function App() {
  // make grocery list
  // display <ul><li>...</ul>
  const grocery = [
    'buy tofu',
    'buy soya milk',
    'buy saten'
  ]

  const handleSubmit = (event) => {
    console.log('submitting');
    event.preventDefault();
    event.stopPropagation();
  }

  // conditions
  const maybeTrueMaybeFalse = () => {
    if (Math.random() > 0.5) {
      return true;
    } else {
      return false;
    }
  }

  const handleClick = () => {
    alert('hello');
  }

  return (
    <div style={ {
      backgroundColor: maybeTrueMaybeFalse() ? 'red' : 'blue',
      // background-color // error
    } }>
      <div className="App" id="hello" >
        <h1>JSX Tutorial</h1>
        {/* <H1>jsx tutorial</H1> rule 1 : no big letters */}

        <H2 />
        {/* <H2 /> if big letter make sure mapps to component */}
      </div>
      <div className="">
        <h1>yet another div</h1>

        <select>
          <DynamicOptions />
        </select>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">enter your name</label>
        <input id="name" />
        <button type="submit">submit</button>
      </form>

      <div>
        {
          Math.random()
          // number, string, true/false, jsx, null, undefined [...]

          // (function() {
          //   Math.random();
          //   Math.random();
          // })()
        }
        {
          // {'hello': 'world'} // error
        }
        <br/>
        {
          'hello'
        }
        <br/>
        {
          // if (someExpress === true) {
          //   return <div>true condition</div>
          // } else {
          //   return null
          // }
          true && <div>true condition</div>
        }
        {
          // if (someExpress === false) {
          //   return <div>true condition</div>
          // } else {
          //   return null
          // }
          false || <div>some expression</div>
        }
        {
          null
        }

        {
          [
            'sdfasdf',
            10,
            true,
            <li>hello</li>
          ]
        }
      </div>

      <h1>for example</h1>

      {/* <ul>
        <li>buy...</li>
      </ul> */}

      <ul>
        {
          // [
          //   <li>dfgdfg</li>,
          //   <li>dfgdfg</li>
          // ]

          grocery.map(
            function(singleItem) {
              return (<li>{singleItem}</li>)
            }
          )

          
        }

        {
          // ori suggestion
          (function() {
            const lis = [];
            for(let item of grocery) {
              lis.push(<li>{item}</li>)
            }
            return lis;
          })()
        }
      </ul>

      <div>
        <h1>conditions</h1>

        {
          // if (maybeTrueMaybeFalse()) {
          //   ...
          // }

          maybeTrueMaybeFalse() ? <h1>Greater</h1> : <h1>lower</h1>

          
        }

        {
          (function() {
            if (maybeTrueMaybeFalse()) {
              return <h1>Greater</h1>
            } else {
              return <h1>lower</h1>
            }
          })()
        }

        {
          maybeTrueMaybeFalse() ? <h1>Greater</h1> : null
        }

        {
          maybeTrueMaybeFalse() && <h1>Greater</h1>
        }

        {
          maybeTrueMaybeFalse() ? null : <h1>Greater</h1>
        }

        {
          maybeTrueMaybeFalse() || <h1>Greater</h1>
        }
      </div>

      <div>
        <h1>
          events
        </h1>
        <button onClick={handleClick}>click me</button>
      </div>
    </div>
    
  );
}

export default App;
