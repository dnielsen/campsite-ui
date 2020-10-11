import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { FullSessionParams } from "../common/interfaces";

function EditSessionRedirect() {
  const { sessionId } = useParams<FullSessionParams>();

  return <Redirect to={`/sessions/${sessionId}/edit`} />;
}

export default EditSessionRedirect;
