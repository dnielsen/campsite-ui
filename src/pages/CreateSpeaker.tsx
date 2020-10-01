import React from "react";
import SpeakerForm from "../components/SpeakerForm";
import useCreateSpeakerFormProps from "../hooks/useCreateSpeakerFormProps";
import { StyledH2 } from "../styled/styledCommon";

function CreateSpeaker() {
  const formProps = useCreateSpeakerFormProps();

  return (
    <div>
      <StyledH2>Create a speaker</StyledH2>
      <SpeakerForm formProps={formProps} />
    </div>
  );
}

export default CreateSpeaker;
