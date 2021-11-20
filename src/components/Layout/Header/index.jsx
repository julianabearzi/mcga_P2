import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Students App</h2>
      </div>
    </div>
  );
};

export default Header;
