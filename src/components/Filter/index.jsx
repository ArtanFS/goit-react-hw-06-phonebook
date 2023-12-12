import { useDispatch, useSelector } from 'react-redux';
import { setFilterAction } from 'store/filter/filterSlice';
import { selectFilter } from 'store/filter/filterSelectors';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(setFilterAction(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor="inputFindName">Find contacts by name</label>
      <input
        name="filter"
        type="text"
        id="inputFindName"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
