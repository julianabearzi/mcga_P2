import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import styles from './layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.layoutContainer}>
    <div className={styles.mainContainer}>
      <Header />
      <NavBar />
      <Main container={children} />
      <Footer />
    </div>
  </div>
);

export default Layout;
