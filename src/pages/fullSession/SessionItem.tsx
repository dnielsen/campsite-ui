import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import * as sessStyles from "../../styled/sessionStyles";
import * as spkStyles from "../../styled/speakerStyles";
import util from "../../common/util";
import { Link } from "react-router-dom";
import { StyledSessionDescription } from "../../styled/styledSession";
import {
  StyledSpeakerFlexWrapper,
  StyledSpeakerContainer,
} from "../../styled/sessionStyles";

function SessionItem() {
  const { data: session, loading, error } = useSelector(
    (state: RootState) => state.session,
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;
  if (!session) return <div>something went wrong</div>;

  return (
    <sessStyles.StyledSessionDetailWrapper>
      <spkStyles.StyledSpeakerSessionScheduleContainer>
        <p>{session.name}</p>
        <p>{util.getFullDateString(session.startDate)}</p>
        <p>
          <Link to={`/sessions/${session.id}`}>Watch</Link>
        </p>
      </spkStyles.StyledSpeakerSessionScheduleContainer>
      <sessStyles.StyledVideoContainer>
        <iframe
          title={session.name}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IZwdHxC3my0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </sessStyles.StyledVideoContainer>
      <StyledSessionDescription>
        <h2>Description</h2>
        <p>{session.description}</p>
      </StyledSessionDescription>
      {session.speakers && (
        <StyledSpeakerContainer>
          <h2>Speakers</h2>
          <StyledSpeakerFlexWrapper>
            {session.speakers.map((speaker) => (
              <sessStyles.StyledSpeakerContent key={speaker.id}>
                <sessStyles.StyledSpeakerPhoto>
                  <Link to={`/speakers/${speaker.id}`}>
                    <img src={speaker.photo} alt="speaker-img" />
                  </Link>
                </sessStyles.StyledSpeakerPhoto>
                <sessStyles.StyledSpeakerName>
                  <Link to={`/speakers/${speaker.id}`}>{speaker.name}</Link>
                </sessStyles.StyledSpeakerName>
                <sessStyles.StyledSpeakerTitle>
                  {speaker.headline}
                </sessStyles.StyledSpeakerTitle>
                <spkStyles.StyledSpeakerSocialMedia>
                  <a href={"https://twitter.com/elonmusk"}>
                    <i className="fa fa-twitter twitter" aria-hidden="true" />
                  </a>
                  <a href={"https://linkedin.com"}>
                    <i className="fa fa-linkedin linkedin" aria-hidden="true" />
                  </a>
                </spkStyles.StyledSpeakerSocialMedia>
              </sessStyles.StyledSpeakerContent>
            ))}
          </StyledSpeakerFlexWrapper>
        </StyledSpeakerContainer>
      )}
    </sessStyles.StyledSessionDetailWrapper>
  );
}

export default SessionItem;
