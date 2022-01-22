// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Login from './Login';
import Logout from './Logout';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';
// Services
import data from '../data/data.json';

function App() {
  // State
  const [posts] = useState(data);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/logout">
          <Logout />
        </Route>
      </Switch>
    </>
  );
}

export default App;
