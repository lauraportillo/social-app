// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Header.scss';

const Header = () => {
  const isLogged = false;
  return (
    <header className="containerHeader">
      <Link to="/postlist">
        <h1 className="containerHeader__title">FriendChic</h1>
      </Link>

      <nav className="containerHeader__nav">
        {isLogged ? (
          <Link className="containerHeader__nav--item" to="/logout">
            Logout
          </Link>
        ) : (
          <Link className="containerHeader__nav--item" to="/">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
