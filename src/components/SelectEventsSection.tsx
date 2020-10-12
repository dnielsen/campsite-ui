import React, { useEffect, useState } from "react";
import { StyledLabel, StyledSection, StyledSelect } from "../styled/styledForm";
import { Field } from "formik";
import { Event } from "../common/interfaces";
import { BASE_EVENT_API_URL } from "../common/constants";

function SelectEventsSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Fetch the events
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

  if (loading) return <div>loading...</div>;
  if (error) return <div>error: ${error.message}</div>;

  return (
    <StyledSection>
      <StyledLabel htmlFor="eventId">Event</StyledLabel>
      <Field name={"eventId"} as={StyledSelect}>
        {events.map((event) => (
          <option key={event.id} value={event.id}>
            {event.name}
          </option>
        ))}
      </Field>
    </StyledSection>
  );
}

export default SelectEventsSection;
