// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Login from './Login';
import Logout from './Logout';
import PostList from './PostList';
import UserDetail from './UserDetail';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';
// Services
import data from '../data/data.json';

function App() {
  // State
  const [posts] = useState(data);

  //  // Each user has their link
  //  const renderCharacterDetail = (props) => {
  //   const id = parseInt(props.match.params.id);
  //   const characterFound = characters.find((character) => character.id === id);

  //   if (characterFound) {
  //     return <CharacterDetail character={characterFound} />;
  //   } else {
  //     return <CharacterNotFound />;
  //   }
  // };

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
        <UserDetail posts={posts} />
      </Route>
    </>
  );
}

export default App;
