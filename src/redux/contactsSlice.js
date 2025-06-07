import { createSlice } from '@reduxjs/toolkit';
import { contactsData } from 'data/contactsData';

const initialState = {
  value: contactsData,
  //   value: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      //action.payload - это новый контакт
      state.value.push(action.payload);
    },
    removeContact: (state, action) => {
      //action.payload - это id
      const index = state.value.findIndex(
        contact => contact.id === action.payload
      );
      state.value.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

// export default counterSlice.reducer;
