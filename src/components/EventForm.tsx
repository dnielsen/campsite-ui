import React from "react";
import { Field, Form, Formik, FormikState, FormikValues } from "formik";
import { FormProps, FormEventInput } from "../common/interfaces";
import DateTimeField from "./DateTimeField";
import ImageUploadField from "./ImageUploadField";
import { StyledButton, StyledForm, StyledLabel } from "../styled/styled";
import CustomField from "./CustomField";

interface Props {
  formProps: FormProps<FormEventInput>;
}

function EventForm(props: Props) {
  return (
    <Formik {...props.formProps}>
      {({ isSubmitting }: FormikState<FormikValues>) => (
        <Form noValidate>
          <section>
            <StyledLabel htmlFor={"name"}>Name</StyledLabel>
            <Field type={"text"} name={"name"} />
          </section>
          <section>
            <StyledLabel htmlFor={"description"}>Description</StyledLabel>
            <Field type={"text"} name={"description"} />
          </section>
          <section>
            <StyledLabel htmlFor={"photo"}>Photo</StyledLabel>
            <ImageUploadField name={"photo"} />
          </section>
          <section>
            <StyledLabel htmlFor={"organizerName"}>Organizer name</StyledLabel>
            <Field type={"text"} name={"organizerName"} />
          </section>
          <section>
            <StyledLabel htmlFor={"address"}>Address</StyledLabel>
            <Field type={"text"} name={"address"} />
          </section>
          <section>
            <StyledLabel htmlFor={"startDate"}>Start date</StyledLabel>
            <DateTimeField name={"startDate"} />
          </section>
          <section>
            <StyledLabel htmlFor={"endDate"}>End date</StyledLabel>
            <DateTimeField name={"endDate"} />
          </section>
          <StyledButton type={"submit"} disabled={isSubmitting}>
            Submit
          </StyledButton>
        </Form>
      )}
    </Formik>
  );
}

export default EventForm;
