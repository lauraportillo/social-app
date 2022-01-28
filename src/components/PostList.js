// Components
import HeaderPost from './HeaderPost';
import Post from './Post';
import FilterByName from './FilterByName';
import Footer from './Footer';
// Styles
import '../stylesheets/PostList.scss';

const PostList = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
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
        <form onSubmit={handleForm} className="containerPostListMain__form">
          <FilterByName handleFilter={props.handleFilter} name={props.name} />
        </form>

        <ul className="containerPostListMain__list">{renderPost}</ul>
      </main>
      <Footer />
    </div>
  );
};

export default PostList;
