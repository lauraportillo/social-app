// React
import React from 'react';
// Styles
import '../stylesheets/Post.scss';

const Post = (props) => {
  return (
    <article>
      <img src={props.post.post.photo} alt="post" />
      <h2>{props.post.name}</h2>
      <p>{props.post.post.description}</p>
    </article>
  );
};

export default Post;
