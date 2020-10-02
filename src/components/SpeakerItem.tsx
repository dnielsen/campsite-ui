import React from "react";
import { SpeakerPreview } from "../common/interfaces";
import { Link } from "react-router-dom";
import {
  StyledHeadline,
  StyledSpeakerImg,
  StyledSpeakerInfoWrapper,
  StyledSpeakerName,
} from "../styled/styledAllSpeakers";
import { StyledH3 } from "../styled/styledCommon";

interface Props {
  speaker: SpeakerPreview;
}

function SpeakerItem(props: Props) {
  return (
    <div>
      <Link to={`/speakers/${props.speaker.id}`}>
        <StyledSpeakerImg src={props.speaker.photo} alt={props.speaker.name} />
      </Link>
      <StyledSpeakerInfoWrapper>
        <StyledSpeakerName>
          <Link to={`/speakers/${props.speaker.id}`}>{props.speaker.name}</Link>
        </StyledSpeakerName>
        <StyledHeadline>{props.speaker.headline}</StyledHeadline>
      </StyledSpeakerInfoWrapper>
    </div>
  );
}

export default SpeakerItem;
