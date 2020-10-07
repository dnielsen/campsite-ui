import React from "react";
import { StyledH2 } from "../styled/styledCommon";
import useSignInFormProps from "../hooks/useSignInFormProps";
import SignInForm from "./signIn/SignInForm";

function SignIn() {
  const formProps = useSignInFormProps();

  return (
    <div>
      <StyledH2>Sign in</StyledH2>
      <SignInForm formProps={formProps} />
    </div>
  );
}

export default SignIn;
