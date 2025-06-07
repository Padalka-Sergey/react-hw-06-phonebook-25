import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ children }) => {
  const contacts = useSelector(state => state.contacts.value);
  return (
    contacts.length > 0 && (
      <>
        {children}
        <ul>
          <ContactListItem />
        </ul>
      </>
    )
  );
};
