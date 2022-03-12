// Styles
import '../stylesheets/UserNotFound.scss';

const UserNotFound = (props) => {

  return (
    <article className="containerUserNotFound">
      <div className="containerUserNotFound__photo"></div>
      <h2 className="containerUserNotFound__title">Sorry, friend not found</h2>
    </article>
  );
};

export default UserNotFound;
