import React from "react";
import { Field, Form, Formik, FormikState, FormikValues } from "formik";
import {
  EventDetails,
  FormProps,
  FormSessionInput,
  SpeakerPreview,
} from "../common/interfaces";
import Checkbox from "./Checkbox";
import DateTimeField from "./DateTimeField";
import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledSection,
  StyledSelect,
  StyledTextarea,
} from "../styled/styledForm";

// A temporary solution, later we might load speakers and events asynchronously,
// and fetch less data.
interface Props {
  speakers: SpeakerPreview[];
  events: EventDetails[];
  formProps: FormProps<FormSessionInput>;
}

function SessionForm(props: Props) {
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
              {props.events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.name}
                </option>
              ))}
            </Field>
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor={"speakerIds"}>Speakers</StyledLabel>
            {props.speakers.map((speaker) => (
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
