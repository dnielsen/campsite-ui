import React from "react";
import useAPI from "../hooks/useAPI";
import { Speaker } from "../common/interfaces";
import { StyledSpeakerLi, StyledSpeakerUl } from "../styled/styledAllSpeakers";
import SpeakerItem from "../components/SpeakerItem";
import { StyledH2 } from "../styled/styledCommon";

function AllSpeakers() {
  const { data: speakers, loading, error } = useAPI<Speaker[]>("/speakers");

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;

  return (
    <div>
      <StyledH2>Our speakers</StyledH2>
      <StyledSpeakerUl>
        {speakers.map((speaker) => (
          <StyledSpeakerLi key={speaker.id}>
            <SpeakerItem speaker={speaker} />
          </StyledSpeakerLi>
        ))}
      </StyledSpeakerUl>
    </div>
  );
}

export default AllSpeakers;
