import React from "react";
import { Field, Form, Formik, FormikState, FormikValues } from "formik";
import { FormProps, FormSignInInput } from "../../common/interfaces";
import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledSection,
} from "../../styled/styledForm";
import useSignInFormProps from "../../hooks/useSignInFormProps";

function SignInForm() {
  const formProps = useSignInFormProps();
  return (
    <Formik {...formProps}>
      {({ isSubmitting }: FormikState<FormikValues>) => (
        <Form noValidate>
          <StyledSection>
            <StyledLabel htmlFor={"email"}>Email</StyledLabel>
            <Field type={"text"} name={"email"} as={StyledInput} />
          </StyledSection>
          <StyledSection>
            <StyledLabel htmlFor={"password"}>Password</StyledLabel>
            <Field type={"text"} name={"password"} as={StyledInput} />
          </StyledSection>
          <StyledButton type={"submit"} disabled={isSubmitting}>
            Submit
          </StyledButton>
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
