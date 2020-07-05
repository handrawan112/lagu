import React from 'react';

import {Switch,Route,withRouter,useHistory} from "react-router-dom";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

function App() {

  let history=useHistory();

  React.useEffect(()=>{
    history.push("/lagu");
  },[history]);

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/lagu">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default withRouter(App);
