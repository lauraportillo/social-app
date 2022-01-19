// React
import { Link } from 'react-router-dom';
// Styles
import '../stylesheets/Header.scss';

const Header = () => {
  const isLogged = false;
  return (
    <header className="nav">{isLogged ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}</header>
  );
};

export default Header;
