import React, { useEffect, useState } from "react";
import { Speaker } from "../common/interfaces";
import { StyledSpeakerLi, StyledSpeakerUl } from "../styled/styledAllSpeakers";
import SpeakerItem from "../components/SpeakerItem";
import { StyledH2 } from "../styled/styledCommon";
import speakerService from "../services/speakerService";

function AllSpeakers() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const data = await speakerService.getAll();
        setSpeakers(data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    })();
  }, []);

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
