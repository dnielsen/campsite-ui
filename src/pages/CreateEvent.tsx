import React from "react";
import EventForm from "../components/EventForm";
import useCreateEventFormProps from "../hooks/useCreateEventFormProps";
import { StyledH2 } from "../styled/styledCommon";

function CreateEvent() {
  const formProps = useCreateEventFormProps();

  return (
    <div>
      <StyledH2>Create an event</StyledH2>
      <EventForm formProps={formProps} />
    </div>
  );
}

export default CreateEvent;
