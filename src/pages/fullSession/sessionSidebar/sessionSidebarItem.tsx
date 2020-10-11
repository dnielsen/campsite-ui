import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import * as s from "../../../styled/sessionStyles";
import { Link, useParams } from "react-router-dom";

function SessionSidebarItem() {
  const { sessionId, eventId } = useParams<{
    sessionId: string;
    eventId: string;
  }>();

  const { data: event, loading, error } = useSelector(
    (state: RootState) => state.event,
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;
  if (!event) return <div>something went wrong</div>;

  return (
    <s.SessionListWrapper>
      <h3>
        <Link to={`/events/${eventId}`}>{event.name}</Link>
      </h3>
      <ul>
        {event.sessions &&
          event.sessions.map((s) => (
            <Link to={`/events/${eventId}/sessions/${s.id}`} key={s.id}>
              <li className={s.id === sessionId ? "active" : undefined}>
                {s.name}
              </li>
            </Link>
          ))}
      </ul>
    </s.SessionListWrapper>
  );
}

export default SessionSidebarItem;
