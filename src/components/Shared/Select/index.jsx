/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import styles from './select.module.css';

const Select = ({ input, meta, label, options }) => {
  return (
    <div className={styles.selectContainer}>
      <label className={styles.lbl}>{label}</label>
      <NativeSelect className={styles.sel} {...input}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.value}
          </option>
        ))}
      </NativeSelect>
      {meta.error && meta.touched && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default Select;
