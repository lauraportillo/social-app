// React
import React from 'react';
// Components
import HeaderPost from './HeaderPost';
import Post from './Post';
// Styles
import '../stylesheets/PostList.scss';

const PostList = (props) => {
  const renderPost = props.posts.map((post) => {
    return (
      <li key={post.id.toString()}>
        <Post post={post} />
      </li>
    );
  });

  return (
    <>
      <HeaderPost />
      <ul className="containerPostList">{renderPost}</ul>
    </>
  );
};

export default PostList;
