import React from "react";
import useAPI from "../hooks/useAPI";
import { Session } from "../common/interfaces";
import { Link, useHistory, useParams } from "react-router-dom";
import { BASE_SESSION_API_URL } from "../common/constants";
// import styled component
import * as s from "../styled/sessionStyles";
import * as g from "../styled/globalStyles";
import util from "../common/util";

function FullSession() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const { data: session, loading, error } = useAPI<Session>(`/sessions/${id}`);

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;

  async function handleClick() {
    await fetch(`${BASE_SESSION_API_URL}/${id}`, { method: "DELETE" });
    // Redirect to the home page after deleting the speaker.
    history.push("/");
  }

  return (
    <g.Container>
      <s.SessionWrapper>
        <s.FlexWrapper>
          <s.SessionListWrapper>
            <h2>Session(s)</h2>
            <ul>
              <li className="active">Intro to Python</li>
              <li>Intro to HTML/CSS/Bootstrap</li>
              <li>Intro to Python Web Framework</li>
              <li>Python Data Structure</li>
              <li>Intro to Python</li>
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
                title={"Session video"}
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
