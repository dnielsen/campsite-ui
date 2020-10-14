import React from "react";
import { StyledH2 } from "../styled/styledCommon";
import SignInForm from "./signIn/SignInForm";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useHistory } from "react-router-dom";

const CLIENT_ID = "df486625c9c9cce6ccd7";
const REDIRECT_URI = "http://localhost:2222/sign-in/github";

function SignIn() {
  const history = useHistory();
  const { data: authData } = useSelector((state: RootState) => state.auth);
  // Redirect to the home page if the user is already logged in.
  if (authData) history.push("/");
  return (
    <div>
      <StyledH2>Sign in</StyledH2>
      <SignInForm />
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`}
      >
        Sign in with GitHub
      </a>
    </div>
  );
}

export default SignIn;
