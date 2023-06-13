import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {data: contactsInitialState},
    reducers: {
        addContact(state, { payload }) {
            const contactExists = state.data.find(
            contact => contact.name.toLowerCase() === payload.name.toLowerCase()
        );
        if (contactExists) {
            alert(`${payload.name} is already in contacts.`);
            return;
        }
        state.data.push(payload);
        },
        deleteContact(state, { payload }) {
            const index = state.data.findIndex(contact => contact.id === payload);
        state.data.splice(index, 1);
        },
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;