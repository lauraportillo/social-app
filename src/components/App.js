// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Login from './Login';
import Logout from './Logout';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login">
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
