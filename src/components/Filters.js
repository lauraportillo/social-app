// Components
import FilterByName from './FilterByName';
// Styles
import '../stylesheets/Filters.scss';

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="containerPostListHeader__form">
      <FilterByName handleFilter={props.handleFilter} name={props.name} />
    </form>
  );
};

export default Filters;
