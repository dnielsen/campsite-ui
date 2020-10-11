import React from "react";
import useAPI from "../hooks/useAPI";
import { Speaker } from "../common/interfaces";
import { Link, useParams } from "react-router-dom";
import * as s from "../styled/speakerStyles";
import { SpeakerDataWrapper } from "../styled/speakerStyles";
import { StyledContainer } from "../styled/styledCommon";
import {
  StyledSpeakerSessionDescription,
  StyledSpeakerSessionName,
  StyledSpeakerSessionStartDate,
  StyledWatch,
} from "../styled/styledSpeaker";
import dateUtil from "../common/dateUtil";

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
                  </a>
                  <a href={"https://linkedin.com"}>
                    <i className="fa fa-linkedin linkedin" aria-hidden="true" />
                  </a>
                </s.SpeakerSocialMedia>
                <s.SpeakerBio>
                  <p>{speaker.bio}</p>
                </s.SpeakerBio>
              </s.SpeakerContent>
            </SpeakerDataWrapper>
          </s.SpeakerInfoWrapper>
          {speaker.sessions && (
            <s.SpeakerSessionWrapper>
              <h2>Sessions</h2>
              {speaker.sessions.map((session) => (
                <div key={session.id}>
                  <s.SpeakerSessionScheduleWrapper>
                    <StyledSpeakerSessionName>
                      <Link
                        to={`/events/${session.eventId}/sessions/${session.id}`}
                      >
                        {session.name}
                      </Link>
                    </StyledSpeakerSessionName>
                    <StyledSpeakerSessionStartDate>
                      {dateUtil.getFullDateString(session.startDate)}
                    </StyledSpeakerSessionStartDate>
                    <StyledWatch>
                      <Link
                        to={`/events/${session.eventId}/sessions/${session.id}`}
                      >
                        Watch
                      </Link>
                    </StyledWatch>
                  </s.SpeakerSessionScheduleWrapper>
                  <StyledSpeakerSessionDescription>
                    {session.description}
                  </StyledSpeakerSessionDescription>
                </div>
              ))}
            </s.SpeakerSessionWrapper>
          )}
        </s.FlexWrapper>
      </s.SpeakerProfileWrapper>
    </StyledContainer>
  );
}

export default FullSpeaker;
