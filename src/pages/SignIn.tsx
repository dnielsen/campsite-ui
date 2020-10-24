import React from "react";
import { StyledH2 } from "../styled/styledCommon";
import SignInForm from "./signIn/SignInForm";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Redirect } from "react-router-dom";

function SignIn() {
  const { data: authData } = useSelector((state: RootState) => state.auth);
  // Redirect to the home page if the user is already signed in.
  if (authData) return <Redirect to={"/"} />;

  return (
    <div>
      <StyledH2>Sign in</StyledH2>
      <SignInForm />
    </div>
  );
}

export default SignIn;
