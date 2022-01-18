// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Home from './Home';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
