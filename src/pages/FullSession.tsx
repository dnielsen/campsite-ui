import React from "react";
import useAPI from "../hooks/useAPI";
import { FullSessionParams, Session } from "../common/interfaces";
import { Link, useParams } from "react-router-dom";
import * as s from "../styled/sessionStyles";
import * as spkStyles from "../styled/speakerStyles";
import { StyledSessionDescription } from "../styled/styledSession";
import { SpeakerFlexWrapper, SpeakerWrapper } from "../styled/sessionStyles";
import dateUtil from "../common/dateUtil";

function FullSession() {
  const { sessionId } = useParams<FullSessionParams>();
  const { data: session, loading, error } = useAPI<Session>(
    `/sessions/${sessionId}`,
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;

  return (
    <s.SessionWrapper>
      <s.FlexWrapper>
        <s.SessionListWrapper>
          <h3>
            <Link to={`/events/${session.event.id}`}>{session.event.name}</Link>
          </h3>
          <ul>
            {session.event.sessions &&
              session.event.sessions.map((s) => (
                <Link
                  to={`/events/${session.event.id}/sessions/${s.id}`}
                  key={s.id}
                >
                  <li className={s.id === session.id ? "active" : undefined}>
                    {s.name}
                  </li>
                </Link>
              ))}
          </ul>
        </s.SessionListWrapper>
        <s.SessionDetailWrapper>
          <spkStyles.SpeakerSessionScheduleWrapper>
            <p>{session.name}</p>
            <p>{dateUtil.getFullDateString(session.startDate)}</p>
            <p>
              <Link to={`/sessions/${session.id}`}>Watch</Link>
            </p>
          </spkStyles.SpeakerSessionScheduleWrapper>
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
          <StyledSessionDescription>
            <h2>Description</h2>
            <p>{session.description}</p>
          </StyledSessionDescription>
          {session.speakers && (
            <SpeakerWrapper>
              <h2>Speakers</h2>
              <SpeakerFlexWrapper>
                {session.speakers.map((speaker) => (
                  <s.SpeakerContent key={speaker.id}>
                    <s.SpeakerPhoto>
                      <Link to={`/speakers/${speaker.id}`}>
                        <img src={speaker.photo} alt="speaker-img" />
                      </Link>
                    </s.SpeakerPhoto>
                    <s.SpeakerName>
                      <Link to={`/speakers/${speaker.id}`}>{speaker.name}</Link>
                    </s.SpeakerName>
                    <s.SpeakerTitle>{speaker.headline}</s.SpeakerTitle>
                    <spkStyles.SpeakerSocialMedia>
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
                    </spkStyles.SpeakerSocialMedia>
                  </s.SpeakerContent>
                ))}
              </SpeakerFlexWrapper>
            </SpeakerWrapper>
          )}
        </s.SessionDetailWrapper>
      </s.FlexWrapper>
    </s.SessionWrapper>
  );
}

export default FullSession;
