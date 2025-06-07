// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { NameBox, Button } from './ContactListItem.styled';

export const ContactListItem = () => {
  const contacts = useSelector(state => state.contacts.value);
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  const filterNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filterNames.map(contact => (
    <li key={contact.id}>
      <NameBox>
        {contact.name}: {contact.number}
      </NameBox>

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
