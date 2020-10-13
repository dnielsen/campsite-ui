import React from "react";
import { useParams } from "react-router-dom";
import SessionForm from "../components/SessionForm";
import useEditSessionFormProps from "../hooks/useEditSession";
import { FullSessionParams } from "../common/interfaces";

function EditSession() {
  const { sessionId } = useParams<FullSessionParams>();
  const formProps = useEditSessionFormProps({
    id: sessionId,
  });

  return (
    <div>
      <h3>Edit Session</h3>
      <SessionForm formProps={formProps} />
    </div>
  );
}

export default EditSession;
