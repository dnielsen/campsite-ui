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
import { StyledButton, StyledLabel } from "../styled/styled";
import CustomField from "./CustomField";

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
          <section>
            <StyledLabel htmlFor={"name"}>Name</StyledLabel>
            <CustomField type={"text"} name={"name"} />
          </section>
          <section>
            <StyledLabel htmlFor={"description"}>Description</StyledLabel>
            <CustomField type={"text"} name={"description"} />
          </section>
          <section>
            <StyledLabel htmlFor={"url"}>Url</StyledLabel>
            <CustomField type={"text"} name={"url"} />
          </section>
          <section>
            <StyledLabel htmlFor={"startDate"}>Start date</StyledLabel>
            <DateTimeField name={"startDate"} />
          </section>
          <section>
            <StyledLabel htmlFor={"endDate"}>End date</StyledLabel>
            <DateTimeField name={"endDate"} />
          </section>
          <section>
            <StyledLabel htmlFor="eventId">Event</StyledLabel>
            <Field name={"eventId"} as={"select"}>
              {props.events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.name}
                </option>
              ))}
            </Field>
          </section>
          <section>
            <StyledLabel htmlFor={"speakerIds"}>Speakers</StyledLabel>
            {props.speakers.map((speaker) => (
              <Checkbox
                key={speaker.id}
                name={"speakerIds"}
                value={speaker.id}
                label={speaker.name}
              />
            ))}
          </section>
          <StyledButton type={"submit"} disabled={isSubmitting}>
            Submit
          </StyledButton>
        </Form>
      )}
    </Formik>
  );
}

export default SessionForm;
