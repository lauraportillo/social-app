// Styles
import '../stylesheets/UserDetail.scss';

const UserDetail = (props) => {
  return (
    <article className="containerUser">
      <img className="containerUser__img" src={props.post.image} alt="user-pic" />
      <h2 className="containerUser__title">@{props.post.name}</h2>
      <p className="containerUser__text">{props.post.description}</p>
    </article>
  );
};

export default UserDetail;
