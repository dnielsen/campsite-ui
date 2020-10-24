import React from "react";
import { useParams } from "react-router-dom";
import SessionForm from "../components/SessionForm";
import useEditSessionFormProps from "../hooks/useEditSessionFormProps";
import { FullSessionParams } from "../common/interfaces";
import { StyledH2 } from "../styled/styledCommon";

function EditSession() {
  const { sessionId } = useParams<FullSessionParams>();
  const formProps = useEditSessionFormProps({
    id: sessionId,
  });

  return (
    <div>
      <StyledH2>Edit Session</StyledH2>
      <SessionForm formProps={formProps} />
    </div>
  );
}

export default EditSession;
