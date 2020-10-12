import React from "react";
import { useParams } from "react-router-dom";
import SessionForm from "../components/SessionForm";
import useEditSessionFormProps from "../hooks/useEditSessionFormProps";

function EditSession() {
  const { id } = useParams<{ id: string }>();
  const formProps = useEditSessionFormProps({ id });

  return (
    <div>
      <h3>Edit Session</h3>
      <SessionForm formProps={formProps} />
    </div>
  );
}

export default EditSession;
