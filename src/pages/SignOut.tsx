import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signOut } from "../store/auth/authActions";

function SignOut() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOut());
  }, [dispatch]);

  return <Redirect to={"/"} />;
}

export default SignOut;
