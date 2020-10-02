import React from "react";
import useAPI from "../hooks/useAPI";
import { Session } from "../common/interfaces";
import { Link, useParams } from "react-router-dom";
import util from "../common/util";
import * as s from "../styled/sessionStyles";
import { StyledContainer } from "../styled/styledCommon";

function FullSession() {
  const { id } = useParams<{ id: string }>();
  const { data: session, loading, error } = useAPI<Session>(`/sessions/${id}`);

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;

  return (
    <StyledContainer>
      <s.SessionWrapper>
        <s.FlexWrapper>
          <s.SessionListWrapper>
            <h3>
              <Link to={`/events/${session.event.id}`}>
                {session.event.name}
              </Link>
            </h3>
            <ul>
              {session.event.sessions &&
                session.event.sessions.map((s) => (
                  <Link to={`/sessions/${s.id}`} key={s.id}>
                    <li className={s.id === session.id ? "active" : undefined}>
                      {s.name}
                    </li>
                  </Link>
                ))}
            </ul>
          </s.SessionListWrapper>
          <s.SessionDetailWrapper>
            <s.SpeakerSessionScheduleWrapper>
              <div>{session.name}</div>
              <div>{util.getFullDateString(session.startDate)}</div>
              <div>
                <Link to={session.event.registrationUrl}>Registration</Link>
              </div>
              <div>
                <Link to={`/sessions/${session.id}`}>Watch</Link>
              </div>
            </s.SpeakerSessionScheduleWrapper>
            <s.VideoWrapper>
              <iframe
                title={session.name}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IZwdHxC3my0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </s.VideoWrapper>
            <h2>Description</h2>
            <p>{session.description}</p>
            {session.speakers && (
              <>
                <h2>Speaker(s)</h2>
                <s.FlexWrapperSpeakers>
                  {session.speakers.map((speaker) => (
                    <s.SpeakerContent key={speaker.id}>
                      <s.SpeakerPhoto>
                        <Link to={`/speakers/${speaker.id}`}>
                          <img
                            src={speaker.photo}
                            alt="speaker-img"
                            className="img-fluid"
                          />
                        </Link>
                      </s.SpeakerPhoto>
                      <s.SpeakerName>
                        <Link to={`speakers/${speaker.id}`}>
                          {speaker.name}
                        </Link>
                      </s.SpeakerName>
                      <s.SpeakerTitle>{speaker.headline}</s.SpeakerTitle>
                      <s.SpeakerSocialMedia>
                        <a href={"https://twitter.com/elonmusk"}>
                          <i
                            className="fa fa-twitter twitter"
                            aria-hidden="true"
                          />
                        </a>
                        <a href={"https://linkedin.com"}>
                          <i
                            className="fa fa-linkedin linkedin"
                            aria-hidden="true"
                          />
                        </a>
                      </s.SpeakerSocialMedia>
                    </s.SpeakerContent>
                  ))}
                </s.FlexWrapperSpeakers>
              </>
            )}
          </s.SessionDetailWrapper>
        </s.FlexWrapper>
      </s.SessionWrapper>
    </StyledContainer>
  );
}

export default FullSession;
