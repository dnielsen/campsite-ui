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

  // We check for `authData === undefined` because otherwise
  // we'd get redirected to the sign in page anyways even if
  // we were logged in since this code runs before the
  // `dispatch(authenticate())` executes.
  if (loading || authData === undefined) return <div>loading...</div>;
  return (
    <Route exact={props.exact} path={props.path}>
      {authData ? props.children : <Redirect to={"/auth/sign-in"} />}
    </Route>
  );
}

export default PrivateRoute;
