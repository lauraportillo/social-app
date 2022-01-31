// Styles
import '../stylesheets/FilterByName.scss';

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value,
    });
  };
  return (
    <>
      <input
        className="inputSearch"
        type="text"
        name="name"
        id="name"
        placeholder="search"
        // synchronized state with input
        value={props.name}
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByName;
