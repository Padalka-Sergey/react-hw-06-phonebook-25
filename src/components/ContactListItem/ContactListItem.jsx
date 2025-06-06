// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { NameBox, Button } from './ContactListItem.styled';

// export const ContactListItem = ({ deleteContact, filterNames }) => {
export const ContactListItem = ({ filterNames }) => {
  // const contacts = useSelector(state => state.contacts.value);
  const dispatch = useDispatch();
  return filterNames.map(contact => (
    <li key={contact.id}>
      <NameBox>
        {contact.name}: {contact.number}
      </NameBox>
      {/* <Button type="button" onClick={() => deleteContact(contact.id)}> */}
      <Button type="button" onClick={() => dispatch(removeContact(contact.id))}>
        Delete
      </Button>
    </li>
  ));
};

// ContactListItem.propTypes = {
//   deleteContact: PropTypes.func.isRequired,
//   filterNames: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
