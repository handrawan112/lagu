import React from "react";

import Right from "../Component/DashboardJS/Right";
import Bookmark from "../Component/Bookmark/Right";
import History from "../Component/History/Right";


import {Switch,Route,useRouteMatch} from "react-router-dom";

export default function RightSwitch(){

  let {path}=useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Right />
      </Route>
      <Route path={`${path}/bookmark`}>
        <Bookmark />
      </Route>
      <Route path={`${path}/history`}>
        <History />
      </Route>
    </Switch>
  );
}
