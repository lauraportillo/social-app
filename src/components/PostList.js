// Components
import HeaderPost from './HeaderPost';
import Post from './Post';
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
    <>
      <HeaderPost />
      <main className="containerPostList">
        <form className="containerPostList__form">
          <input className="containerPostList__form--item" placeholder="search" />
        </form>

        <ul className="containerPostList__list">{renderPost}</ul>
      </main>
      <Footer />
    </>
  );
};

export default PostList;
