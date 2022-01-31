// React
import React, { useState } from 'react';
// Components
import Header from './Header';
import PostList from './PostList';
import Filters from './Filters';
import Footer from './Footer';
// Styles
import '../stylesheets/Home.scss';

const Home = (props) => {
  // State
  const [name, setName] = useState('');

  // Function that handles changes to the input
  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    }
  };

  // Filter
  const filterPosts = props.posts.filter((post) => {
    return post.name.toLowerCase().includes(name.toLowerCase());
  });

  return (
    <>
      <div className="containerPostList">
        <header>
          <Header />
          <Filters handleFilter={handleFilter} name={name} />
        </header>
        <main className="containerPostListMain">
          <PostList posts={filterPosts} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
