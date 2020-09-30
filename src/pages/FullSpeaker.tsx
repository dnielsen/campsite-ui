import React, { Fragment } from "react";
import useAPI from "../hooks/useAPI";
import { Speaker } from "../common/interfaces";
import { Link, useHistory, useParams } from "react-router-dom";
import { BASE_SPEAKER_API_URL } from "../common/constants";
import * as g from "../styled/globalStyles";
import * as s from "../styled/speakerStyles";
import util from "../common/util";

function FullSpeaker() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const { data: speaker, loading, error } = useAPI<Speaker>(`/speakers/${id}`);

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;

  async function handleClick() {
    await fetch(`${BASE_SPEAKER_API_URL}/${id}`, { method: "DELETE" });
    // Redirect to the home page after deleting the speaker.
    history.push("/");
  }

  return (
    <g.Container>
      <s.SpeakerProfileWrapper>
        <s.SpeakerBanner>
          <img
            src={
              "https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-minimal-city-building-banner-background-image_232405.jpg"
            }
            alt={`${speaker.name}'s banner`}
          />
        </s.SpeakerBanner>
        <s.FlexWrapper>
          <s.SpeakerInfoWrapper>
            <s.SpeakerPhoto>
              <img
                src={speaker.photo}
                alt={speaker.name}
                className="img-fluid"
              />
            </s.SpeakerPhoto>
            <s.SpeakerContent>
              <s.SpeakerName>{speaker.name}</s.SpeakerName>
              <s.SpeakerTitle>{speaker.headline}</s.SpeakerTitle>
              <s.SpeakerSocialMedia>
                <a href={"https://twitter.com/elonmusk"}>
                  <i className="fa fa-twitter twitter" aria-hidden="true" />
                  Twitter
                </a>
                <a href={"https://linkedin.com"}>
                  <i className="fa fa-linkedin linkedin" aria-hidden="true" />
                  LinkedIn
                </a>
              </s.SpeakerSocialMedia>
              <s.SpeakerBio>
                <h3>About Me</h3>
                <p>{speaker.bio}</p>
              </s.SpeakerBio>
            </s.SpeakerContent>
          </s.SpeakerInfoWrapper>
          {speaker.sessions && (
            <s.SpeakerSessionWrapper>
              <h2>Sessions</h2>
              {speaker.sessions.map((session) => (
                <Fragment key={session.id}>
                  <s.SpeakerSessionScheduleWrapper>
                    <s.SessionName>
                      <Link to={`/sessions/${session.id}`}>{session.name}</Link>
                    </s.SessionName>
                    <s.SessionDate>
                      {util.getFullDateString(session.startDate)}
                    </s.SessionDate>
                    <s.SessionRegister>Registration</s.SessionRegister>
                    <s.SessionWatch>
                      <Link to={`/sessions/${session.id}`}>Watch</Link>
                    </s.SessionWatch>
                  </s.SpeakerSessionScheduleWrapper>
                  <p>
                    What comes next? What are the most innovative developments
                    in Big Data storage and query design? Where is the
                    innovation, what should be you be trying out and looking at?
                    In this talk I&apos;ll cover the latest and greatest for the
                    Big Data world - this will include in-memory stores such as
                    Aerospike, triplestores such as AlgebraixData and
                    Dremel-implementations such as Google Big Query. Come to
                    this talk to see these new data stores in action.
                  </p>
                </Fragment>
              ))}
            </s.SpeakerSessionWrapper>
          )}
        </s.FlexWrapper>
      </s.SpeakerProfileWrapper>
    </g.Container>
  );
}

export default FullSpeaker;
