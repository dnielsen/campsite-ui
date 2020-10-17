import React from "react";
import { StyledH2 } from "../styled/styledCommon";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Redirect } from "react-router-dom";
import SignUpForm from "./signUp/SignUpForm";

function SignUp() {
  const { data: authData } = useSelector((state: RootState) => state.auth);
  // Redirect to the home page if the user is already logged in.
  if (authData) return <Redirect to={"/"} />;

  return (
    <div>
      <StyledH2>Sign up</StyledH2>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
