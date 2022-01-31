// Components
import Header from './Header';
import Post from './Post';
import FilterByName from './FilterByName';
import UserNotFound from './UserNotFound';
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

  // if (renderPost.length === 0) {
  //   return <UserNotFound />;
  // }

  return (
    <div className="containerPostList">
      <header>
        <Header />
        <form onSubmit={handleForm} className="containerPostListHeader__form">
          <FilterByName handleFilter={props.handleFilter} name={props.name} />
        </form>
      </header>
      <main className="containerPostListMain">
        <ul className="containerPostListMain__list">{renderPost}</ul>
      </main>
      <Footer />
    </div>
  );
};

export default PostList;
