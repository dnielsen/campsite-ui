import React from "react";
import { Field, Form, Formik, FormikState, FormikValues } from "formik";
import { FormProps, FormSpeakerInput } from "../common/interfaces";
import ImageUploadField from "./ImageUploadField";
import { StyledButton, StyledForm, StyledLabel } from "../styled/styled";
import StyledField from "./CustomField";

interface Props {
  formProps: FormProps<FormSpeakerInput>;
}

function SpeakerForm(props: Props) {
  return (
    <Formik {...props.formProps}>
      {({ isSubmitting }: FormikState<FormikValues>) => (
        <Form noValidate>
          <section>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <Field type={"text"} name={"name"} />
          </section>
          <section>
            <StyledLabel htmlFor="bio">Bio</StyledLabel>
            <Field type={"text"} name={"bio"} as={"textarea"} rows={3} />
          </section>
          <section>
            <StyledLabel htmlFor="headline">Headline</StyledLabel>
            <Field type={"text"} name={"headline"} />
          </section>
          <section>
            {/*For now it's just a url, later we might add a photo upload*/}
            <StyledLabel htmlFor="photo">Photo</StyledLabel>
            <ImageUploadField name={"photo"} />
          </section>
          <StyledButton type={"submit"} disabled={isSubmitting}>
            Submit
          </StyledButton>
        </Form>
      )}
    </Formik>
  );
}

export default SpeakerForm;
