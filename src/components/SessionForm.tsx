import React, { useEffect, useState } from "react";
import { Field, Form, Formik, FormikState, FormikValues } from "formik";
import {
  FormProps,
  FormSessionInput,
  SpeakerPreview,
} from "../common/interfaces";
import DateTimeField from "./DateTimeField";
import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledSection,
  StyledSelect,
  StyledTextarea,
} from "../styled/styledForm";
import Checkbox from "./Checkbox";
import { Event } from "../common/interfaces";
import { BASE_EVENT_API_URL, BASE_SPEAKER_API_URL } from "../common/constants";

// A temporary solution, later we might load speakers and events asynchronously,
// and fetch less data.
interface Props {
  formProps: FormProps<FormSessionInput>;
}

function SessionForm(props: Props) {
  const [events, setEvents] = useState<Event[]>([]);
  const [eventsLoading, setEventsLoading] = useState(false);
  const [eventsError, setEventsError] = useState<Error | null>(null);

  const [speakers, setSpeakers] = useState<SpeakerPreview[]>([]);
  const [speakersLoading, setSpeakersLoading] = useState(false);
  const [speakersError, setSpeakersError] = useState<Error | null>(null);

  useEffect(() => {
    (async function fetchSpeakers() {
      setSpeakersLoading(true);
      const res = await fetch(BASE_SPEAKER_API_URL);
      if (!res.ok) {
        setSpeakersError(new Error(res.statusText));
      } else {
        const data = await res.json();
        setSpeakers(data);
      }
      setSpeakersLoading(false);
    })();

    (async function fetchEvents() {
      setEventsLoading(true);
      const res = await fetch(BASE_EVENT_API_URL);
      if (!res.ok) {
        setEventsError(new Error(res.statusText));
      } else {
        const data = await res.json();
        setEvents(data);
      }
      setEventsLoading(false);
    })();
  }, []);

  if (eventsLoading || speakersLoading) return <div>loading...</div>;
  if (eventsError)
    return <div>failed to fetch events: {eventsError.message}</div>;
  if (speakersError)
    return <div>failed to fetch speakers: {speakersError.message}</div>;

  return (
    <Formik {...props.formProps}>
      {({ isSubmitting }: FormikState<FormikValues>) => (
        <Form noValidate>
          <StyledSection>
            <StyledLabel htmlFor={"name"}>Name</StyledLabel>
            <Field type={"text"} name={"name"} as={StyledInput} />
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor={"description"}>Description</StyledLabel>
            <Field
              type={"text"}
              name={"description"}
              as={StyledTextarea}
              rows={6}
            />
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor={"url"}>Url</StyledLabel>
            <Field type={"text"} name={"url"} as={StyledInput} />
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor={"startDate"}>Start date</StyledLabel>
            <DateTimeField name={"startDate"} />
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor={"endDate"}>End date</StyledLabel>
            <DateTimeField name={"endDate"} />
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor="eventId">Event</StyledLabel>
            <Field name={"eventId"} as={StyledSelect}>
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.name}
                </option>
              ))}
            </Field>
          </StyledSection>
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
          <StyledButton type={"submit"} disabled={isSubmitting}>
            Submit
          </StyledButton>
        </Form>
      )}
    </Formik>
  );
}

export default SessionForm;
