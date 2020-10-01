import React from "react";
import { Field, Form, Formik, FormikState, FormikValues } from "formik";
import { FormProps, FormSpeakerInput } from "../common/interfaces";
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
  formProps: FormProps<FormSpeakerInput>;
}

function SpeakerForm(props: Props) {
  return (
    <Formik {...props.formProps}>
      {({ isSubmitting }: FormikState<FormikValues>) => (
        <Form noValidate>
          <StyledSection>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <Field type={"text"} name={"name"} as={StyledInput} />
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor="bio">Bio</StyledLabel>
            <Field type={"text"} name={"bio"} as={StyledTextarea} rows={3} />
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor="headline">Headline</StyledLabel>
            <Field type={"text"} name={"headline"} as={StyledInput} />
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

export default SpeakerForm;
