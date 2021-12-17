import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../components/Home';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Users from '../components/Users';
import Students from '../components/Students';
import PrivateRoute from './PrivateRoute';
import RoutePublic from './PublicRoute';

const Routes = ({ username }) => {
  return (
    <Switch>
      <Redirect exact push from="/" to="/home" />
      <Route path="/home">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <RoutePublic
        exact
        path="/login"
        component={Login}
        authenticated={!!username}
      />
      <RoutePublic
        exact
        path="/signup"
        component={Users}
        authenticated={!!username}
      />
      <PrivateRoute exact path="/students" component={Students} />
      <Redirect exact push from="*" to="/home" />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
});

export default connect(mapStateToProps, null)(Routes);
