/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';

const PublicRoute = ({ authenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        authenticated ? (
          <Redirect to="/students" />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, null)(PublicRoute);
