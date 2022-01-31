// Components
import UserNotFound from './UserNotFound';
import Post from './Post';
// Styles
import '../stylesheets/PostList.scss';

const PostList = (props) => {
  const renderPost = () => {
    if (props.posts.length === 0) {
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
    <>
      <main className="containerPostListMain">
        <ul className="containerPostListMain__list">{renderPost}</ul>
      </main>
    </>
  );
};

export default PostList;
