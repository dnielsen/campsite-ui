import React, { useEffect, useState } from "react";
import SessionForm from "../components/SessionForm";
import useCreateSessionFormProps from "../hooks/useCreateSessionFormProps";
import { StyledH2 } from "../styled/styledCommon";
import { BASE_EVENT_API_URL } from "../common/constants";
import { Event } from "../common/interfaces";

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
      const res = await fetch(BASE_EVENT_API_URL);
      if (!res.ok) {
        setError(new Error(res.statusText));
      } else {
        const data = await res.json();
        setEvents(data);
      }
      setLoading(false);
    })();
  }, []);

  const formProps = useCreateSessionFormProps({
    eventId: events.length > 0 && !loading ? events[0].id : "",
  });

  return (
    <div>
      <StyledH2>Create a session</StyledH2>
      <SessionForm formProps={formProps} />
    </div>
  );
}

export default CreateSession;
