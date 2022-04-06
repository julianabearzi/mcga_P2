import { useEffect, React } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Home from '../components/Home';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Users from '../components/Users';
import Students from '../components/Students';
import PrivateRoute from './PrivateRoute';
import RoutePublic from './PublicRoute';
import { revalidateToken as revalidateTokenAction } from '../redux/actions/authActions';

const Routes = ({ revalidateToken, isLoading }) => {
  useEffect(() => {
    revalidateToken();
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }

  return (
    <Switch>
      <Redirect exact push from="/" to="/home" />
      <Route path="/home">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <RoutePublic exact path="/login">
        <Login />
      </RoutePublic>
      <RoutePublic exact path="/signup">
        <Users />
      </RoutePublic>
      <PrivateRoute exact path="/students">
        <Students />
      </PrivateRoute>
      <Redirect exact push from="*" to="/home" />
    </Switch>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      revalidateToken: revalidateTokenAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
