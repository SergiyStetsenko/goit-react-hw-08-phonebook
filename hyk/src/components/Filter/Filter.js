import { useSelector, useDispatch } from "react-redux";
import { changeFilter, contactsSelectors } from "../../redux/contacts";


export default function Filter() {
   const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const onChange = e => dispatch(changeFilter(e.target.value));
  return (
    <label>
      Find contacts by name :
      <br />
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

