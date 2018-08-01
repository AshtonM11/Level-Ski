import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import UserLogin from "./component/UserLogin";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/UserLogin" component={UserLogin} />
  </Switch>
);
