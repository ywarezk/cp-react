import React, {Suspense} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';
import { Link } from 'react-router-dom';
// import Settings from './components/Settings';

const LazySettings = React.lazy(() => {
  return import('./components/Settings');
})

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1>React Router</h1>

            <nav>
              <ul>
                <li>
                  <Link to="/about">
                      About
                  </Link>
                  {/* <a href="/about">About</a> */}
                </li>
                <li>
                  <Link to="/">
                        Home
                  </Link>
                  {/* <a href="/">Home</a> */}
                </li>
                <li>
                  <Link to="/settings">
                        Settings
                  </Link>
                  {/* <a href="/">Home</a> */}
                </li>
              </ul>
            </nav>

            <Suspense fallback={<div>Loading...</div>}>

            
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about/:id/:yariv" component={About} />
                <Route exact path="/settings" component={LazySettings} />
                <Route path="**" component={Error404} />
              </Switch>
            </Suspense>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
