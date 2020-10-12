import React from "react";
import { Field, Form, Formik, FormikState, FormikValues } from "formik";
import { FormProps, FormSessionInput } from "../common/interfaces";
import DateTimeField from "./DateTimeField";
import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledSection,
  StyledTextarea,
} from "../styled/styledForm";
import CheckboxSpeakersSection from "./CheckboxSpeakersSection";
import SelectEventsSection from "./SelectEventsSection";

// A temporary solution, later we might load speakers and events asynchronously,
// and fetch less data.
interface Props {
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
          <SelectEventsSection />
          <CheckboxSpeakersSection />
          <StyledButton type={"submit"} disabled={isSubmitting}>
            Submit
          </StyledButton>
        </Form>
      )}
    </Formik>
  );
}

export default SessionForm;
