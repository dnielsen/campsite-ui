import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface Props {
  exact?: boolean;
  path: string;
  children: React.ReactChild;
}

function PrivateRoute(props: Props) {
  const { data: authData, loading } = useSelector(
    (state: RootState) => state.auth,
  );
  if (loading) return <div>loading...</div>;
  return (
    <Route exact={props.exact} path={props.path}>
      {authData ? props.children : <Redirect to={"/auth/sign-in"} />}
    </Route>
  );
}

export default PrivateRoute;
