/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../components/Layout';

const PrivateRoute = ({ authenticated, component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      {authenticated ? (
        <Layout>
          <Component />
        </Layout>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, null)(PrivateRoute);
