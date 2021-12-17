import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div className={styles.layoutContainer}>
      {location.pathname === '/login' || location.pathname === '/signup' ? (
        <div className={styles.mainContainer}>
          <Main container={children} />
          <Footer />
        </div>
      ) : (
        <div className={styles.mainContainer}>
          <Header />
          <NavBar />
          <Main container={children} />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
