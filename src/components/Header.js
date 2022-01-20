// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Header.scss';

const Header = () => {
  const isLogged = false;
  return (
    <header className="containerHeader">
      <h1 className="home__title">FriendChic</h1>
      <nav> {isLogged ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}</nav>
    </header>
  );
};

export default Header;
