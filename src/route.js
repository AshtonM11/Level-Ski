import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./compnents/Login/Login";
import Profile from "./compnents/Profile/Profile";

export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" component={Profile} />
  </Switch>
);
