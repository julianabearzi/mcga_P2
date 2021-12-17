/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdHome, MdArrowBack } from 'react-icons/md';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import {
  required,
  trim,
  usernameFormat,
  composeValidators,
} from '../../utils/validations';
import Button from '../Shared/Button';
import TextInput from '../Shared/TextInput';
import { signUp as signUpAction } from '../../redux/actions/authActions';
import styles from './users.module.css';

const Users = ({ signUp, isLoading }) => {
  const onSubmitUsers = (values) => {
    signUp(values);
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
        <Avatar sx={{ m: 1, bgcolor: 'primary' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Form
          onSubmit={onSubmitUsers}
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
                  validate={composeValidators(usernameFormat, required, trim)}
                />
              </div>
              <div className={styles.textInput}>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  component={TextInput}
                  placeholder="Password"
                  validate={composeValidators(required, trim)}
                />
              </div>
              {isLoading ? (
                <LinearProgress />
              ) : (
                <div className={styles.buttonContainer}>
                  <Button
                    disabled={submitting || pristine}
                    btnLabel="Sign up"
                    type="submit"
                  />
                  <p className={styles.text}>
                    Already have an account?
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                      <span> </span>Sign In →
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
      signUp: signUpAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
