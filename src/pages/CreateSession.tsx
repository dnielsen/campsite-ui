import React, { useEffect, useState } from "react";
import SessionForm from "../components/SessionForm";
import useCreateSessionFormProps from "../hooks/useCreateSessionFormProps";
import { StyledH2 } from "../styled/styledCommon";
import { Event } from "../common/interfaces";
import eventService from "../services/eventService";

function CreateSession() {
  // TODO: refactor, currently we're fetching the events here and in the the SelectEventsSection.
  // The following 18 lines are duplicate of `<SelectEventsSection />`
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Fetch the events.
  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const data = await eventService.getAll();
        setEvents(data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    })();
  }, [setError]);

  const formProps = useCreateSessionFormProps({
    eventId: events.length > 0 && !loading ? events[0].id : "",
  });

  if (error) return <div>something went wrong: {error.message}</div>;

  return (
    <div>
      <StyledH2>Create a session</StyledH2>
      <SessionForm formProps={formProps} />
    </div>
  );
}

export default CreateSession;
