import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()} - Juliana Bearzi
      </p>
    </div>
  );
};

export default Footer;
