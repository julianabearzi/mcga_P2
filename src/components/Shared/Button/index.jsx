import React from 'react';
import styles from './button.module.css';

const Button = ({ type, onClick, disabled, btnLabel }) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {btnLabel}
    </button>
  );
};

export default Button;
