import { addContact, deleteContact, setFilter } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
    [addContact]: (state, action) => {
        const contactExists = state.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        );
        if (contactExists) {
            alert(`${name} is already in contacts.`);
            return;
        }
        state.push(action.payload);
    },
    [deleteContact]: (state, action) => {
        const index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
    },
});

const filterInitialState = "";

export const filterReducer = createReducer(filterInitialState, {
    [setFilter]: (state, action) => {
        state.filter = action.payload;
    },
});