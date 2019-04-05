import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import './App.css';
import Page2 from './page2';
import Page1 from './page1';

const fooReducer = (state, action) => {
  switch (action.type) {
    case 'MSG_SET':
      return action.payload;
    case 'MSG_UNSET':
    default:
      return 'default';
  }
};

const appStore = createStore(
  fooReducer,
  composeWithDevTools(applyMiddleware(logger))
);

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <div className="App">
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/page1/">Page 1</Link>
                  </li>
                  <li>
                    <Link to="/page2/">Page 2</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/page1/" component={Page1}/>
              <Route path="/page2/" component={Page2}/>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
