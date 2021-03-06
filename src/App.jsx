import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BitcoinState from './context/bitcoin/BitcoinState'
import Home from './components/Home';

// Styles
import MJSS from 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';

function App() {

  useEffect(() => {
    MJSS.AutoInit();
  }, [])

  return (
    <BitcoinState>
      <div className="container">
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    </BitcoinState>
  );
}

export default App;
