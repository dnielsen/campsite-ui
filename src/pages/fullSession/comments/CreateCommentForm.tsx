import React from "react";
import { Field, Form, Formik, FormikState, FormikValues } from "formik";
import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledSection,
} from "../../../styled/styledForm";
import useCreateCommentFormProps from "../../../hooks/useCreateCommentFormProps";

interface Props {
  sessionId: string;
}

function CreateCommentForm(props: Props) {
  const formProps = useCreateCommentFormProps(props.sessionId);

  return (
    <Formik {...formProps}>
      {({ isSubmitting }: FormikState<FormikValues>) => (
        <Form noValidate>
          <StyledSection>
            <StyledLabel htmlFor={"content"}>Content</StyledLabel>
            <Field type={"input"} name={"content"} as={StyledInput} />
          </StyledSection>
          <StyledButton type={"submit"} disabled={isSubmitting}>
            Submit
          </StyledButton>
        </Form>
      )}
    </Formik>
  );
}

export default CreateCommentForm;
