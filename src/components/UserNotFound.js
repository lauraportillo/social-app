// React
import { Link } from 'react-router-dom';
// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/UserNotFound.scss';

const UserNotFound = (props) => {
  return (
    <div className="containerUser">
      <Header />
      <main className="containerUserMain">
        <h2 className="containerUser__title">friend not found</h2>
        <button className="containerUserMain__btn">
          <Link className="containerUserMain__btn" to="/home">
            {'<<<'}
          </Link>
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default UserNotFound;
