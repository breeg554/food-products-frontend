import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from "./contexts/authContext";

const PrivateRoute = (props: RouteProps) => {
  const { currentUser } = useAuth();
  if (currentUser) return <Route {...props} />;
  else return <Redirect to="/signin" />;
};

export default PrivateRoute;
