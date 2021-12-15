import React from 'react';
import PropTypes from 'prop-types';
import styles from './homeItem.module.css';

export const ItemHome = ({ student }) => {
  return (
    <div className={styles.itemHomeContainer}>
      <p className={styles.item}>{student.name}</p>
      <p className={styles.item}>{student.lastName}</p>
      <p className={styles.item}>({student.age})</p>
    </div>
  );
};

ItemHome.propTypes = {
  student: PropTypes.instanceOf(Object).isRequired,
};

export default ItemHome;
