import React from "react";
import PropTypes from 'prop-types';


export default function ContactForm({addContact, value, name , number, compareContact}) { 
    return(
        <>
            <form onSubmit={addContact}>
            <label>Name</label>
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder='Enter your name'
            value={name}
            onInput={value}
            />
            <label>Number</label>
            <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder='Enter your number'
            value={number}
            onInput={value}
            />
            <button type="submit">add contact</button>
            </form>
        </>
    )
}
ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
    vName: PropTypes.func.isRequired,
    vNumber: PropTypes.func.isRequired
}