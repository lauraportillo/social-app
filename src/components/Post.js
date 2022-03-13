// React
import { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Post.scss';

const Post = (props) => {

  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1)
  };

  return (
    <article className="containerPost">
      <img className="containerPost__img" src={props.post.post.photo} alt="post" />
      <div className="containerPostSection">
        <Link to={`./post/${props.post.id}`}>
          <h2 className="containerPostSection__title">@{props.post.name}</h2>
        </Link>
        <div className="containerPostSection__likes">
          <button className="containerPostSection__likes--btn" onClick={handleAdd}>
            ❤
          </button>
          <p className="containerPostSection__likes--text">{counter}</p>
        </div>
      </div>
      <p className="containerPost__text">{props.post.post.description}</p>
    </article>
  );
};

export default Post;
