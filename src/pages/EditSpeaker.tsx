import React from "react";
import { useParams } from "react-router-dom";
import useEditSpeakerFormProps from "../hooks/useEditSpeakerFormProps";
import SpeakerForm from "../components/SpeakerForm";
import { StyledH2 } from "../styled/styledCommon";

function EditSpeaker() {
  const { id } = useParams<{ id: string }>();
  const formProps = useEditSpeakerFormProps({ id });
  return (
    <div>
      <StyledH2>Edit speaker</StyledH2>
      <SpeakerForm formProps={formProps} />
    </div>
  );
}

export default EditSpeaker;
