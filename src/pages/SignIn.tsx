import React from "react";
import { StyledH2 } from "../styled/styledCommon";
import SignInForm from "./signIn/SignInForm";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();
  const { data: authData } = useSelector((state: RootState) => state.auth);
  // Redirect to the home page if the user is already logged in.
  if (authData) history.push("/");
  return (
    <div>
      <StyledH2>Sign in</StyledH2>
      <SignInForm />
    </div>
  );
}

export default SignIn;
