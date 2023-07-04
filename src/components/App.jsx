import React, { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"

export default class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }
  valueInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  addContact = (e) => {
    e.preventDefault();
    const { name, contacts } = this.state
    const existingContact = contacts.some(contact => contact.name === name)
    if(existingContact){
      return alert(`${this.state.name} is name found in contact`)
    }
    this.setState({
      contacts : [{id: 'id-' + nanoid(1), name: this.state.name , number: this.state.number}, ...this.state.contacts]
    })
    this.reset()
  }
  buttonDelete = (contactId) => {
    this.setState((e) => ({
      contacts: e.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  valueFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }
  filterInputHandler = () =>
    this.state.contacts.filter((item) =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
  );
  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  }
  render(){
    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} value={this.valueInput} name={this.name} number={this.number}></ContactForm>
        <h2>Contacts</h2>
        <Filter value={this.filter} vFilter={this.valueFilter}></Filter>
        <ContactList contacts={this.filterInputHandler()} buttonDelete={this.buttonDelete}></ContactList>
      </div>
    )
  }
}
