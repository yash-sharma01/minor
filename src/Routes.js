import React from "react";
import { Redirect, Route, Switch } from "react-router";
import LandingPage from "./modules/LandingPage";

const Routes = () => {
  // fetch user type from local host
  let user;

  return (
    <Switch>
      {user === "VENDOR" ? (
        <>
          <Route />
        </>
      ) : user === "USER" ? (
        <>
          <Route />
        </>
      ) : (
        <>
          <Route path="/" component={LandingPage} />
          <Redirect to="/" />
        </>
      )}
    </Switch>
  );
};

export default Routes;
