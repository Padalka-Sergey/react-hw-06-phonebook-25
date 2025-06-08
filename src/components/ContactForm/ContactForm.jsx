import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContactsValue } from '../../redux/contactsSlice';
import {
  LabelName,
  LabelNumber,
  InputName,
  InputNumber,
  Form,
  Button,
} from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContactsValue);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const form = e.target;
    const { name, number } = e.target.elements;

    e.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      return alert(`${name.value} is already in contacts`);
    }

    dispatch(
      addContact({ id: nanoid(), name: name.value, number: number.value })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelName>
        Name
        <InputName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-ЯёЁ]+([ \u0027\-][a-zA-Zа-яА-ЯёЁ]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelName>
      <LabelNumber>
        Number
        <InputNumber
          type="tel"
          name="number"
          pattern="^\+?[0-9\-\.\(\) ]{4,20}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelNumber>
      <Button type="submit">Add contacts</Button>
    </Form>
  );
};
