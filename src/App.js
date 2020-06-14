import React from 'react';

import {Switch,Route,withRouter} from "react-router-dom";

import Dashboard from "./Pages/Dashboard";

function App() {

  return (
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default withRouter(App);
