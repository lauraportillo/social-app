// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Login from './Login';
import Logout from './Logout';
import PostList from './PostList';
import UserProfile from './UserProfile';
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

        <Route exact path="/postlist">
          <PostList posts={posts} />
        </Route>
      </Switch>

      <Route exact path="/post/:id">
        <UserProfile />
      </Route>
    </>
  );
}

export default App;
