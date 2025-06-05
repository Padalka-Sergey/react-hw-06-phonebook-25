import { createSlice } from '@reduxjs/toolkit';
import { contactsData } from 'data/contactsData';

const initialState = {
  //   value: [],
  value: contactsData,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.value.push(action.payload);
    },

    removeContact: (state, action) => {},
  },
});

export const { addContact } = contactsSlice.actions;

// export default counterSlice.reducer;
