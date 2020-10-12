import React from "react";
import { Link } from "react-router-dom";
import useAPI from "../hooks/useAPI";
import { Event } from "../common/interfaces";
import * as s from "../styled/eventStyles";
import util from "../common/util";
import { StyledContainer } from "../styled/styledCommon";

function Home() {
  const { data: events, loading, error } = useAPI<Event[]>("/events");
  if (loading) return <div>loading...</div>;
  if (error) return <div>error: {error.message}</div>;
  if (events.length === 0)
    return (
      <div>
        No events in the database. Restart the server to create a sample event.
      </div>
    );

  return (
    <StyledContainer>
      <s.StyledEventWrapper>
        <s.StyledFlexContainer>
          {events.map((eventDetails) => (
            <s.StyledEventContainer key={eventDetails.id}>
              <Link to={`/events/${eventDetails.id}`}>
                <img src={eventDetails.photo} alt={eventDetails.name} />
              </Link>
              <s.StyledEventContent>
                <div>
                  <s.StyledEventHeading>
                    <Link to={`/events/${eventDetails.id}`}>
                      {eventDetails.name}
                    </Link>
                  </s.StyledEventHeading>
                  <p>
                    <i className="fa fa-calendar mr-2" aria-hidden="true" />
                    {util.getFullDateString(eventDetails.startDate)}
                  </p>
                  <p>
                    <i className="fa fa-map-marker mr-2" aria-hidden="true" />
                    {eventDetails.address}
                  </p>
                  <p>
                    <i className="fa fa-user mr-2" aria-hidden="true" />
                    {eventDetails.organizerName}
                  </p>
                  <s.StyledEventDescription>
                    {/*Temporarily we're doing it this way, we'll later clean it up*/}
                    {eventDetails.description.length > 200
                      ? eventDetails.description.slice(0, 250) + "..."
                      : eventDetails.description}
                  </s.StyledEventDescription>
                </div>
              </s.StyledEventContent>
            </s.StyledEventContainer>
          ))}
        </s.StyledFlexContainer>
      </s.StyledEventWrapper>
    </StyledContainer>
  );
}

export default Home;
