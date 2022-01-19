// Components
import Footer from './Footer';
import Header from './Header';
// Styles
import '../stylesheets/Home.scss';

const Home = (props) => {
  return (
    <div className="containerHome">
      <Header />

      <main className="home">
        <h1>FriendChic App</h1>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
