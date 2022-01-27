// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Post.scss';

const Post = (props) => {
  return (
    <article className="containerPost">
      <img className="containerPost__img" src={props.post.post.photo} alt="post" />

      <Link to={`./post/${props.post.id}`}>
        <h2 className="containerPost__title">@{props.post.name}</h2>
      </Link>

      <p className="containerPost__text">{props.post.post.description}</p>
    </article>
  );
};

export default Post;
