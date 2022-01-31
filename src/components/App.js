// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Login from './Login';
import Logout from './Logout';
import Home from './Home';
import UserDetail from './UserDetail';
import UserNotFound from './UserNotFound';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';
// Services
import data from '../data/data.json';

function App() {
  // State
  const [posts] = useState(data);

  // Each user has their link
  const renderUserDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const characterFound = posts.find((post) => post.id === id);

    if (characterFound) {
      return <UserDetail post={characterFound} />;
    } else {
      return <UserNotFound />;
    }
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/logout">
          <Logout />
        </Route>

        <Route path="/home">
          <Home posts={posts} />
        </Route>

        <Route path="/post/:id" render={renderUserDetail} />
      </Switch>
    </>
  );
}

export default App;
