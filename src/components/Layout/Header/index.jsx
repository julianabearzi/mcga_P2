import React from 'react';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { startLogout as startLogoutAction } from '../../../redux/actions/authActions';

import styles from './header.module.css';

const Header = ({ authenticated, username, startLogout }) => {
  const onLogout = (values) => {
    startLogout(values);
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <h2 className={styles.title}>Students App</h2>
        </Link>
        {!authenticated && (
          <div className={styles.loginButtons}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <p className={styles.signIn}>Sign In</p>
            </Link>
            <div className={styles.signUp}>|</div>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <p className={styles.signUp}>Sign Up</p>
            </Link>
          </div>
        )}
        {authenticated && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Chip
              sx={{
                color: 'white',
              }}
              avatar={
                <Avatar
                  sx={{
                    textTransform: 'uppercase',
                  }}
                >
                  {username.charAt(0)}
                </Avatar>
              }
              label={username}
            />
            <Link
              onClick={() => onLogout()}
              to="/"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                border: '1px solid white',
                margin: '0.4rem',
                padding: '0.4rem',
                borderRadius: '5px',
              }}
            >
              <p className={styles.logOut}>Log out</p>
              <MdLogout
                style={{
                  color: 'gray',
                  marginTop: '0.2rem',
                }}
              />
            </Link>
          </Box>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      startLogout: startLogoutAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  username: state.auth.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
