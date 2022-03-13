// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Post.scss';

const Post = (props) => {
  return (
    <article className="containerPost">
      <img className="containerPost__img" src={props.post.post.photo} alt="post" />
      <div className="containerPost__section1">
        <Link to={`./post/${props.post.id}`}>
          <h2 className="containerPost__section1--title">@{props.post.name}</h2>
        </Link>
        <button className="containerPost__section1--btn">❤</button>
      </div>

      <p className="containerPost__text">{props.post.post.description}</p>
    </article>
  );
};

export default Post;
