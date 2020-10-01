import React, { Fragment } from "react";
import useAPI from "../hooks/useAPI";
import { Speaker } from "../common/interfaces";
import { Link, useHistory, useParams } from "react-router-dom";
import { BASE_SPEAKER_API_URL } from "../common/constants";
import * as s from "../styled/speakerStyles";
import util from "../common/util";
import { SpeakerDataWrapper } from "../styled/speakerStyles";
import { StyledContainer } from "../styled/styledCommon";
import { StyledSpeakerSessionDescription } from "../styled/styledSpeaker";

function FullSpeaker() {
  const { id } = useParams<{ id: string }>();
  const { data: speaker, loading, error } = useAPI<Speaker>(`/speakers/${id}`);

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;

  return (
    <StyledContainer>
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
            <SpeakerDataWrapper>
              <s.SpeakerPhoto>
                <img src={speaker.photo} alt={speaker.name} />
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
            </SpeakerDataWrapper>
          </s.SpeakerInfoWrapper>
          {speaker.sessions && (
            <s.SpeakerSessionWrapper>
              <h2>Sessions</h2>
              {speaker.sessions.map((session) => (
                <Fragment key={session.id}>
                  <s.SpeakerSessionScheduleWrapper>
                    <div>
                      <Link to={`/sessions/${session.id}`}>{session.name}</Link>
                    </div>
                    <div>{util.getFullDateString(session.startDate)}</div>
                    <div>Registration</div>
                    <div>
                      <Link to={`/sessions/${session.id}`}>Watch</Link>
                    </div>
                  </s.SpeakerSessionScheduleWrapper>
                  <StyledSpeakerSessionDescription>
                    {session.description}
                  </StyledSpeakerSessionDescription>
                </Fragment>
              ))}
            </s.SpeakerSessionWrapper>
          )}
        </s.FlexWrapper>
      </s.SpeakerProfileWrapper>
    </StyledContainer>
  );
}

export default FullSpeaker;
