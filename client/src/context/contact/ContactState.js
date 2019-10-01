import React, { userReducer } from "react";
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
				type: "personal"
			}
		]
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	//add contacts

	//delete contact

	//set current contact

	//clear current contact

	//update contact

	//filter contacts

	//clear filters

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts
			}}
		>
			{this.props.childre}
		</ContactContext.Provider>
	);
};

export default ContactState;
