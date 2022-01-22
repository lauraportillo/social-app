// React
import React from 'react';
// Components
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
    <div className="PostList">
      <ul className="PostList__list">{renderPost}</ul>
    </div>
  );
};

export default PostList;
