// Components
import Header from './Header';
import UserNotFound from './UserNotFound';
import Post from './Post';
import Filters from './Filters';
import Footer from './Footer';
// Styles
import '../stylesheets/PostList.scss';

const PostList = (props) => {
  const renderPost = () => {
    if (props.characters.length === 0) {
      return <UserNotFound />;
    } else {
      return props.posts.map((post) => {
        return (
          <li key={post.id.toString()}>
            <Post post={post} />
          </li>
        );
      });
    }
  };

  return (
    <div className="containerPostList">
      <header>
        <Header />
        <Filters />
      </header>
      <main className="containerPostListMain">
        <ul className="containerPostListMain__list">{renderPost}</ul>
      </main>
      <Footer />
    </div>
  );
};

export default PostList;
