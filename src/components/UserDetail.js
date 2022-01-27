// Styles
import '../stylesheets/UserDetail.scss';

const UserDetail = (props) => {
  return (
    <article>
      <img src={props.post.image} alt="user-pic" />
      <h2>@{props.post.name}</h2>
      <p>{props.post.description}</p>
    </article>
  );
};

export default UserDetail;
