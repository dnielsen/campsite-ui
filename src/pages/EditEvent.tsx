import React from "react";
import { useParams } from "react-router-dom";
import EventForm from "../components/EventForm";
import useEditEventFormProps from "../hooks/useEditEventFormProps";
import { StyledH2 } from "../styled/styledCommon";

function EditEvent() {
  const { id } = useParams<{ id: string }>();
  const formProps = useEditEventFormProps({ id });

  return (
    <div>
      <StyledH2>Edit Event</StyledH2>
      <EventForm formProps={formProps} />
    </div>
  );
}

export default EditEvent;
