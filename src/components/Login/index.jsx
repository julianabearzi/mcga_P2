/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
import { MdHome, MdArrowBack } from 'react-icons/md';
import { required } from '../../utils/validations';
import Button from '../Shared/Button';
import TextInput from '../Shared/TextInput';
import { logIn as logInAction } from '../../redux/actions/authActions';
import styles from './login.module.css';

const Login = ({ logIn, isLoading, error }) => {
  const onSubmitLogin = (values) => {
    logIn(values);
  };

  return (
    <Container
      sx={{
        marginTop: '2rem',
      }}
      component="main"
      maxWidth="xs"
    >
      <Link to="/">
        <MdArrowBack className={styles.btnArrowBack} />
        <MdHome className={styles.btnHome} />
      </Link>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '2rem',
        }}
        className={styles.formContainer}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form
          onSubmit={onSubmitLogin}
          initialValues={{
            username: '',
            password: '',
          }}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.textInput}>
                <Field
                  name="username"
                  component={TextInput}
                  placeholder="Username"
                  validate={required}
                />
              </div>
              <div className={styles.textInput}>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  component={TextInput}
                  placeholder="Password"
                  validate={required}
                />
              </div>
              {error && (
                <div>
                  <Alert
                    sx={{
                      marginBottom: '0.5rem',
                    }}
                    severity="error"
                  >
                    Invalid Values — <strong>check it out!</strong>
                  </Alert>
                </div>
              )}
              {isLoading ? (
                <LinearProgress />
              ) : (
                <div className={styles.buttonContainer}>
                  <Button
                    disabled={submitting || pristine}
                    btnLabel="Sign in"
                    type="submit"
                  />
                  <p className={styles.text}>
                    New to students app?
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                      <span> </span>Sign Up
                    </Link>
                  </p>
                </div>
              )}
            </form>
          )}
        />
      </Box>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      logIn: logInAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  authenticated: state.auth.authenticated,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
