// Styles
import '../stylesheets/InputSearch.scss';

const InputSearch = (props) => {
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
        //estado sincronizado con el input
        value={props.name}
        onChange={handleChange}
      />
    </>
  );
};
export default InputSearch;
