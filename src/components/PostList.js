// Components
import HeaderPost from './HeaderPost';
import Post from './Post';
import InputSearch from './InputSearch';
import Footer from './Footer';
// Styles
import '../stylesheets/PostList.scss';

const PostList = (props) => {
  const renderPost = props.posts.map((post) => {
    return (
      <li key={post.id.toString()}>
        <Post post={post} />
      </li>
    );
  });

  return (
    <div className="containerPostList">
      <HeaderPost />
      <main className="containerPostListMain">
        <form className="containerPostListMain__form">
          <InputSearch />
        </form>

        <ul className="containerPostListMain__list">{renderPost}</ul>
      </main>
      <Footer />
    </div>
  );
};

export default PostList;
