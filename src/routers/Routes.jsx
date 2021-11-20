import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Students from '../components/Students';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact push from="/" to="/home" />
      <Route path="/home">
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route exact path="/students">
        <Layout>
          <Students />
        </Layout>
      </Route>
      <Route exact path="*">
        <Layout>
          <h2>Not Found</h2>
        </Layout>
      </Route>
    </Switch>
  );
};

export default Routes;
