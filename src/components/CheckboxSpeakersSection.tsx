import React, { useEffect, useState } from "react";
import { StyledLabel, StyledSection } from "../styled/styledForm";
import Checkbox from "./Checkbox";
import { BASE_SPEAKER_API_URL } from "../common/constants";
import { SpeakerPreview } from "../common/interfaces";

function CheckboxSpeakersSection() {
  // We're sticking to React (no Redux) (and Formik) state management when it comes to forms.
  const [speakers, setSpeakers] = useState<SpeakerPreview[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Fetch the speakers.
  useEffect(() => {
    (async function () {
      setLoading(true);
      const res = await fetch(BASE_SPEAKER_API_URL);
      if (!res.ok) {
        setError(new Error(res.statusText));
      } else {
        const data = await res.json();
        setSpeakers(data);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: ${error.message}</div>;

  return (
    <StyledSection>
      <StyledLabel htmlFor={"speakerIds"}>Speakers</StyledLabel>
      {speakers.map((speaker) => (
        <Checkbox
          key={speaker.id}
          name={"speakerIds"}
          value={speaker.id}
          label={speaker.name}
        />
      ))}
    </StyledSection>
  );
}

export default CheckboxSpeakersSection;
