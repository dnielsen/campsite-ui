import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import useAPI from "../hooks/useAPI";
import { EventDetails } from "../common/interfaces";
import * as g from "../styled/globalStyles";
import * as s from "../styled/eventStyles";
import util from "../common/util";

function Home() {
  // For dev we're just grabbing whatever event id from the database since there's
  // no <EventList /> for now and redirecting to this event. It's hardcoded in the backend
  // that when it's run, it's creating a sample event.
  // ------
  const { data: events, loading, error } = useAPI<EventDetails[]>("/events");
  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error.message}</div>;
  if (events.length === 0)
    return (
      <div>
        No events in the database. Restart the server to create a sample event.
      </div>
    );
  // ----
  return (
    <g.Container>
      <s.EventWrapper>
        <s.EventMainTitle>
          <h1>Events</h1>
        </s.EventMainTitle>
        <s.FlexWrapper>
          {events.map((eventDetails) => (
            <s.Event key={eventDetails.id}>
              <Link to={`/events/${eventDetails.id}`}>
                <img src={eventDetails.photo} alt={eventDetails.name} />
              </Link>
              <s.EventContent>
                <s.EventHeading>
                  <Link to={`/events/${eventDetails.id}`}>
                    {eventDetails.name}
                  </Link>
                </s.EventHeading>
                <s.EventTime>
                  <i className="fa fa-calendar mr-2" aria-hidden="true" />
                  {util.getFullDateString(eventDetails.startDate)}
                </s.EventTime>
                <s.EventLocation>
                  <i className="fa fa-map-marker mr-2" aria-hidden="true" />
                  {eventDetails.address}
                </s.EventLocation>
                <s.EventOrganizer>
                  <i className="fa fa-user mr-2" aria-hidden="true" />
                  {eventDetails.organizerName}
                </s.EventOrganizer>
                <s.EventDescription>
                  {eventDetails.description}
                </s.EventDescription>
                <s.EventRegister>
                  <a href={"/"}>Register Now</a>
                </s.EventRegister>{" "}
              </s.EventContent>
            </s.Event>
          ))}
        </s.FlexWrapper>
      </s.EventWrapper>
    </g.Container>
  );
}

export default Home;
