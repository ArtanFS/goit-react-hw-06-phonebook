import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <div className={css.wrapper}>
      <label htmlFor="inputFindName">Find contacts by name</label>
      <input
        name="filter"
        type="text"
        id="inputFindName"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
