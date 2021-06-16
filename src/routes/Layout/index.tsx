import React from "react";
import { Route, Switch } from "react-router";
import { BookingScreen, LoginScreen } from "../../screens";
import Profile from "../../screens/Profile";

export const Layout = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/booking" exact component={BookingScreen} />
      <Route path="/" exact component={LoginScreen} />
      <Route path="/Profile" exact component={Profile} />
      <Route path="**" exact component={LoginScreen} />
    </Switch>
  );
};
