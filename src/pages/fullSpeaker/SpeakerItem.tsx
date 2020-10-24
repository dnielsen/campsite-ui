import React from "react";
import { StyledContainer } from "../../styled/styledCommon";
import {
  StyledFlexContainer,
  StyledSpeakerBio,
  StyledSpeakerDataContainer,
  StyledSpeakerInfoWrapper,
  StyledSpeakerName,
  StyledSpeakerPhoto,
  StyledSpeakerProfileWrapper,
  StyledSpeakerSessionScheduleContainer,
  StyledSpeakerSessionWrapper,
  StyledSpeakerSocialMedia,
  StyledSpeakerTitle,
} from "../../styled/speakerStyles";
import {
  StyledSpeakerBanner,
  StyledSpeakerSessionDescription,
  StyledSpeakerSessionName,
  StyledSpeakerSessionStartDate,
  StyledWatch,
} from "../../styled/styledSpeaker";
import { StyledSpeakerContent } from "../../styled/sessionStyles";
import { Link } from "react-router-dom";
import util from "../../common/util";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function SpeakerItem() {
  const { data: speaker, loading, error } = useSelector(
    (state: RootState) => state.speaker,
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;
  if (!speaker) return <div>something went wrong</div>;

  return (
    <StyledContainer>
      <StyledSpeakerProfileWrapper>
        <StyledSpeakerBanner>
          <img
            src={
              "https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-minimal-city-building-banner-background-image_232405.jpg"
            }
            alt={`${speaker.name}'s banner`}
          />
        </StyledSpeakerBanner>
        <StyledFlexContainer>
          <StyledSpeakerInfoWrapper>
            <StyledSpeakerDataContainer>
              <StyledSpeakerPhoto>
                <img src={speaker.photo} alt={speaker.name} />
              </StyledSpeakerPhoto>
              <StyledSpeakerContent>
                <StyledSpeakerName>{speaker.name}</StyledSpeakerName>
                <StyledSpeakerTitle>{speaker.headline}</StyledSpeakerTitle>
                <StyledSpeakerSocialMedia>
                  <a href={"https://twitter.com/elonmusk"}>
                    <i className="fa fa-twitter twitter" aria-hidden="true" />
                  </a>
                  <a href={"https://linkedin.com"}>
                    <i className="fa fa-linkedin linkedin" aria-hidden="true" />
                  </a>
                </StyledSpeakerSocialMedia>
                <StyledSpeakerBio>
                  <p>{speaker.bio}</p>
                </StyledSpeakerBio>
              </StyledSpeakerContent>
            </StyledSpeakerDataContainer>
          </StyledSpeakerInfoWrapper>
          {speaker.sessions && (
            <StyledSpeakerSessionWrapper>
              <h2>Sessions</h2>
              {speaker.sessions.map((session) => (
                <div key={session.id}>
                  <StyledSpeakerSessionScheduleContainer>
                    <StyledSpeakerSessionName>
                      <Link
                        to={`/events/${session.eventId}/sessions/${session.id}`}
                      >
                        {session.name}
                      </Link>
                    </StyledSpeakerSessionName>
                    <StyledSpeakerSessionStartDate>
                      {util.getFullDateString(session.startDate)}
                    </StyledSpeakerSessionStartDate>
                    <StyledWatch>
                      <Link
                        to={`/events/${session.eventId}/sessions/${session.id}`}
                      >
                        Watch
                      </Link>
                    </StyledWatch>
                  </StyledSpeakerSessionScheduleContainer>
                  <StyledSpeakerSessionDescription>
                    {session.description}
                  </StyledSpeakerSessionDescription>
                </div>
              ))}
            </StyledSpeakerSessionWrapper>
          )}
        </StyledFlexContainer>
      </StyledSpeakerProfileWrapper>
    </StyledContainer>
  );
}

export default SpeakerItem;
