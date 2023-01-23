import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './form.module.css';


export class Form extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };


  state = {
    name: '',
    phone: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', phone: '' });
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <div>Name</div>
        <label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <div>Number</div>
        <label>
          <input
            value={this.state.phone}
            onChange={this.handleInputChange}
            type='tel'
            name='phone'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required

          />
        </label>
        <button className={style.btn} type='submit'> Add contact</button>
      </form>
    );
  }

};
