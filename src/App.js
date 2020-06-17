import React from 'react';

import {Switch,Route,withRouter,useRouteMatch} from "react-router-dom";

import Dashboard from "./Pages/Dashboard";

function App() {

  let {path}=useRouteMatch();

  return (
    <Switch>
      <Route path="/" exact>
        wawan
      </Route>
      <Route path="/tes">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default withRouter(App);
