import React from 'react';
import PropTypes from 'prop-types';
import { ItemContact } from '../ItemContact/ItemContact';
import style from './listContact.module.css';

export const ListContact = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, phone }) =>
        <ItemContact key={id} phone={phone} name={name} id={id} del={onDeleteContact} />)}
    </ul>
  );
};

ListContact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  })),
};
