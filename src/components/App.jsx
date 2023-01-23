import React, { Component } from 'react';
import { Form } from './Form/Form';
import { ListContact } from './ListContact/ListContact';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import style from './App.module.css';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onAddContact = (data) => {
    const { name, phone } = data;
    if (this.checkDoubleContact(data)) {
      alert(`${name} is already in your contacts!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      phone,
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  checkDoubleContact = (inputData) => {
    return this.state.contacts.find(contact => contact.name === inputData.name);
  };

  onVisibleContact = () => {
    const normalized = this.state.filter.toLowerCase();
    return (this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalized)));
  };

  onDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(elem => elem.id !== id),
    }));
  };


  render() {
    const visibleContacts = this.onVisibleContact();
    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>Phonebook</h1>
        <Form onSubmit={this.onAddContact} />
        <h2 className={style.subtitle}>Contacts</h2>
        <Filter value={this.state.filter} onFilter={this.handleInputChange} />
        <ListContact contacts={visibleContacts} onDeleteContact={this.onDeleteContact} />
      </div>
    );

  }

};
