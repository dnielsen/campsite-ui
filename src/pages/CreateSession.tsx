import React from "react";
import SessionForm from "../components/SessionForm";
import useAPI from "../hooks/useAPI";
import { EventDetails, SpeakerPreview } from "../common/interfaces";
import useCreateSessionFormProps from "../hooks/useCreateSessionFormProps";
import { StyledH2 } from "../styled/styledCommon";

function CreateSession() {
  // A temporary solution, later we might load just the speaker/event ids and names,
  // and do it asynchronously, that is after having loaded the rest of the form.
  const {
    data: speakers,
    loading: speakersLoading,
    error: speakersError,
  } = useAPI<SpeakerPreview[]>("/speakers");
  const { data: events, loading: eventsLoading, error: eventsError } = useAPI<
    EventDetails[]
  >("/events");

  const formProps = useCreateSessionFormProps({
    eventId: events ? events[0].id : "",
  });

  if (speakersLoading || eventsLoading) return <div>loading...</div>;
  if (speakersError)
    return <div>something went wrong: {speakersError.message}</div>;
  if (eventsError)
    return <div>something went wrong: {eventsError.message}</div>;

  if (events.length === 0) return <div>Create an event first.</div>;
  if (speakers.length === 0) return <div>Create a speaker first.</div>;

  return (
    <div>
      <StyledH2>Create a session</StyledH2>
      <SessionForm speakers={speakers} events={events} formProps={formProps} />
    </div>
  );
}

export default CreateSession;
