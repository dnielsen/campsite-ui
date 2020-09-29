import React from "react";
import useAPI from "../hooks/useAPI";
import { Session } from "../common/interfaces";
import { Link, useParams } from "react-router-dom";
import util from "../common/util";
// import styled component
import * as s from "../styled/sessionStyles";
import * as g from "../styled/globalStyles";

function FullSession() {
  const { id } = useParams<{ id: string }>();
  const { data: session, loading, error } = useAPI<Session>(`/sessions/${id}`);

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;

  return (
    <g.Container>
      <s.SessionWrapper>
        <s.FlexWrapper>
          <s.SessionListWrapper>
            <h2>Session(s)</h2>
            <ul>
              {session.event.sessions &&
                session.event.sessions.map((s) => (
                  <li
                    key={s.id}
                    className={s.id === session.id ? "active" : undefined}
                  >
                    <Link to={`/sessions/${s.id}`}>{s.name}</Link>
                  </li>
                ))}
            </ul>
          </s.SessionListWrapper>
          <s.SessionDetailWrapper>
            <s.SpeakerSessionScheduleWrapper>
              <s.SessionName>{session.name}</s.SessionName>
              <s.SessionDate>
                {util.getFullDateString(session.startDate)}
              </s.SessionDate>
              <s.SessionRegister>Registration</s.SessionRegister>
              <s.SessionWatch>
                <Link to={`/sessions/${session.id}`}>Watch</Link>
              </s.SessionWatch>
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
                        <img
                          src={speaker.photo}
                          alt="speaker-img"
                          className="img-fluid"
                        />
                      </s.SpeakerPhoto>
                      <s.SpeakerName>{speaker.name}</s.SpeakerName>
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
    </g.Container>
  );
}

export default FullSession;
