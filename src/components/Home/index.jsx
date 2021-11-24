import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.title}>Students App</h2>
      <p>By Juliana Bearzi</p>
    </div>
  );
};

export default Home;
