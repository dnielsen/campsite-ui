import React from "react";
import { StyledH2 } from "../styled/styledCommon";
import useSignInFormProps from "../hooks/useSignInFormProps";
import SignInForm from "./signIn/SignInForm";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Redirect, useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();
  const { error } = useSelector((state: RootState) => state.auth);

  if (error) history.go(0);

  return (
    <div>
      <StyledH2>Sign in</StyledH2>
      <SignInForm />
    </div>
  );
}

export default SignIn;
