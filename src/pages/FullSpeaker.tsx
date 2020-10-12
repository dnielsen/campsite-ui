import React from "react";
import useAPI from "../hooks/useAPI";
import { Speaker } from "../common/interfaces";
import { Link, useParams } from "react-router-dom";
import * as s from "../styled/speakerStyles";
import util from "../common/util";
import { StyledSpeakerDataContainer } from "../styled/speakerStyles";
import { StyledContainer } from "../styled/styledCommon";
import {
  StyledSpeakerBanner,
  StyledSpeakerSessionDescription,
  StyledSpeakerSessionName,
  StyledSpeakerSessionStartDate,
  StyledWatch,
} from "../styled/styledSpeaker";

function FullSpeaker() {
  const { id } = useParams<{ id: string }>();
  const { data: speaker, loading, error } = useAPI<Speaker>(`/speakers/${id}`);

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;

  return (
    <StyledContainer>
      <s.StyledSpeakerProfileWrapper>
        <StyledSpeakerBanner>
          <img
            src={
              "https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-minimal-city-building-banner-background-image_232405.jpg"
            }
            alt={`${speaker.name}'s banner`}
          />
        </StyledSpeakerBanner>
        <s.StyledFlexContainer>
          <s.StyledSpeakerInfoWrapper>
            <StyledSpeakerDataContainer>
              <s.StyledSpeakerPhoto>
                <img src={speaker.photo} alt={speaker.name} />
              </s.StyledSpeakerPhoto>
              <s.StyledSpeakerContent>
                <s.StyledSpeakerName>{speaker.name}</s.StyledSpeakerName>
                <s.StyledSpeakerTitle>{speaker.headline}</s.StyledSpeakerTitle>
                <s.StyledSpeakerSocialMedia>
                  <a href={"https://twitter.com/elonmusk"}>
                    <i className="fa fa-twitter twitter" aria-hidden="true" />
                  </a>
                  <a href={"https://linkedin.com"}>
                    <i className="fa fa-linkedin linkedin" aria-hidden="true" />
                  </a>
                </s.StyledSpeakerSocialMedia>
                <s.StyledSpeakerBio>
                  <p>{speaker.bio}</p>
                </s.StyledSpeakerBio>
              </s.StyledSpeakerContent>
            </StyledSpeakerDataContainer>
          </s.StyledSpeakerInfoWrapper>
          {speaker.sessions && (
            <s.StyledSpeakerSessionWrapper>
              <h2>Sessions</h2>
              {speaker.sessions.map((session) => (
                <div key={session.id}>
                  <s.StyledSpeakerSessionScheduleContainer>
                    <StyledSpeakerSessionName>
                      <Link to={`/sessions/${session.id}`}>{session.name}</Link>
                    </StyledSpeakerSessionName>
                    <StyledSpeakerSessionStartDate>
                      {util.getFullDateString(session.startDate)}
                    </StyledSpeakerSessionStartDate>
                    <StyledWatch>
                      <Link to={`/sessions/${session.id}`}>Watch</Link>
                    </StyledWatch>
                  </s.StyledSpeakerSessionScheduleContainer>
                  <StyledSpeakerSessionDescription>
                    {session.description}
                  </StyledSpeakerSessionDescription>
                </div>
              ))}
            </s.StyledSpeakerSessionWrapper>
          )}
        </s.StyledFlexContainer>
      </s.StyledSpeakerProfileWrapper>
    </StyledContainer>
  );
}

export default FullSpeaker;
