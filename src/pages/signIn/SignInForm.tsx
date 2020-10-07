import React from "react";
import { Field, Form, Formik, FormikState, FormikValues } from "formik";
import { FormProps, FormSignInInput } from "../../common/interfaces";
import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledSection,
} from "../../styled/styledForm";

// A temporary solution, later we might load speakers and events asynchronously,
// and fetch less data.
interface Props {
  formProps: FormProps<FormSignInInput>;
}

function SignInForm(props: Props) {
  return (
    <Formik {...props.formProps}>
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
