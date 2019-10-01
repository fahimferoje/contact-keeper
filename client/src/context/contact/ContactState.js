import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from "../types";

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: "A",
				email: "a@a.gmail.com",
				phone: "22-22",
				type: "personal"
			},
			{
				id: 2,
				name: "B",
				email: "b@b.gmail.com",
				phone: "22-200-99",
				type: "professional"
			}
		],
		current: null
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	//add contacts

	const addContact = contact => {
		contact.id = uuid.v4();
		dispatch({ type: ADD_CONTACT, payload: contact});
	}

	//delete contact
	const deleteContact = id => {
		dispatch({ type: DELETE_CONTACT, payload: id});
	}

	//set current contact

	const setCurrent = contact => {
		dispatch({ type: SET_CURRENT, payload: contact});
	}

	//clear current contact

	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT});
	}

	//update contact

	//filter contacts

	//clear filters

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
