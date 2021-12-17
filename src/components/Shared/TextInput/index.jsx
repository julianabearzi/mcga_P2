/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './textInput.module.css';

const TextInput = ({
  input,
  label,
  placeholder,
  meta,
  size,
  variant,
  type,
  id,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.lbl}>{label}</label>
      <TextField
        type={type}
        id={id}
        {...input}
        size={size}
        variante={variant}
        placeholder={placeholder}
      />
      {meta.error && meta.touched && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default TextInput;
