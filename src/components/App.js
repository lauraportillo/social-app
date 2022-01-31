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
  const [name, setName] = useState('');

  // Function that handles changes to the input
  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    }
  };

  // Filter
  const filterPosts = posts.filter((post) => {
    return post.name.toLowerCase().includes(name.toLowerCase());
  });

  // Each user has their link
  const renderUserDetail = (props) => {
    const id = parseInt(props.match.params.id);
    const characterFound = posts.find((post) => post.id === id);

    return <UserDetail post={characterFound} />;
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

        <Route path="/postlist">
          <PostList handleFilter={handleFilter} name={name} posts={filterPosts} />
        </Route>

        <Route path="/post/:id" render={renderUserDetail} />
      </Switch>
    </>
  );
}

export default App;
