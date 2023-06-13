import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [
    {
        id: 0,
        name: "Gery",
        number: "11-111-11",
    }
];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact(state, { payload }) {
            const contactExists = state.find(
            contact => contact.name.toLowerCase() === payload.name.toLowerCase()
        );
        if (contactExists) {
            alert(`${payload.name} is already in contacts.`);
            return;
        }
        state.push(payload);
        },
        deleteContact(state, { payload }) {
            const index = state.findIndex(contact => contact.id === payload);
        state.splice(index, 1);
        },
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;