// React
import { Link } from 'react-router-dom';
// Components
import HeaderPost from './HeaderPost';
import Footer from './Footer';
// Styles
import '../stylesheets/UserDetail.scss';

const UserDetail = (props) => {
  return (
    <div className="containerUser">
      <HeaderPost />
      <main>
        <article className="containerUserArt">
          <img className="containerUserArt__img" src={props.post.image} alt="user-pic" />
          <h2 className="containerUserArt__title">@{props.post.name}</h2>
          <p className="containerUserArt__text">{props.post.description}</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default UserDetail;
