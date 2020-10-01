import React from "react";
import { Field, Form, Formik, FormikState, FormikValues } from "formik";
import { FormProps, FormEventInput } from "../common/interfaces";
import DateTimeField from "./DateTimeField";
import ImageUploadField from "./ImageUploadField";
import {
  StyledButton,
  StyledCameraButton,
  StyledInput,
  StyledLabel,
  StyledSection,
  StyledTextarea,
} from "../styled/styledForm";

interface Props {
  formProps: FormProps<FormEventInput>;
}

function EventForm(props: Props) {
  return (
    <Formik {...props.formProps}>
      {({ isSubmitting }: FormikState<FormikValues>) => (
        <Form noValidate>
          <StyledSection>
            <StyledLabel htmlFor={"name"}>Name</StyledLabel>
            <Field type={"text"} name={"name"} as={StyledInput} />
          </StyledSection>

          <StyledSection>
            <StyledLabel htmlFor={"organizerName"}>Organizer name</StyledLabel>
            <Field type={"text"} name={"organizerName"} as={StyledInput} />
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor={"address"}>Address</StyledLabel>
            <Field type={"text"} name={"address"} as={StyledInput} />
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
            <StyledLabel htmlFor={"startDate"}>Start date</StyledLabel>
            <DateTimeField name={"startDate"} />
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor={"endDate"}>End date</StyledLabel>
            <DateTimeField name={"endDate"} />
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor={"photo"}>Photo</StyledLabel>
            <StyledLabel htmlFor={"photo"}>
              <StyledCameraButton>
                <i className={"fa fa-camera"} />
                Upload
              </StyledCameraButton>
            </StyledLabel>
            <ImageUploadField name={"photo"} />
          </StyledSection>
          <StyledButton type={"submit"} disabled={isSubmitting}>
            Submit
          </StyledButton>
        </Form>
      )}
    </Formik>
  );
}

export default EventForm;
