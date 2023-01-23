import React from 'react';
import PropTypes from 'prop-types';
import style from './filter.module.css';

export const Filter = ({ value, onFilter }) => {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>Find Contacts by name</p>
      <input type='text' name='filter' value={value} onChange={onFilter} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
