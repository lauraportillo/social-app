// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/HeaderPost.scss';

const HeaderPost = () => {
  const isLogged = false;
  return (
    <header className="containerHeaderPost">
      <h1 className="containerHeaderPost__title">FriendChic</h1>
      <nav className="containerHeaderPost__nav">
        {isLogged ? (
          <Link className="containerHeaderPost__nav--item" to="/logout">
            Logout
          </Link>
        ) : (
          <Link className="containerHeaderPost__nav--item" to="/">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default HeaderPost;
