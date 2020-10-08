import React from "react";
import { Field, Form, Formik, FormikState, FormikValues } from "formik";
import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledSection,
  StyledTextarea,
} from "../../styled/styledForm";
import { Comment } from "../../common/interfaces";
import util from "../../common/util";
import {
  StyledCommentContainer,
  StyledCommentContent,
  StyledCommentCreatedAt,
} from "../../styled/styledSession";
import useCreateCommentFormProps from "../../hooks/useCreateCommentFormProps";

interface Props {
  comments: Comment[];
}

function Comments(props: Props) {
  const formProps = useCreateCommentFormProps();

  return (
    <div>
      {props.comments.map((c) => (
        <StyledCommentContainer key={c.id}>
          <StyledCommentContent>{c.content}</StyledCommentContent>
          <StyledCommentCreatedAt>
            {util.getFullDateString(c.createdAt)}
          </StyledCommentCreatedAt>
        </StyledCommentContainer>
      ))}
      <div>
        <Formik {...formProps}>
          {({ isSubmitting }: FormikState<FormikValues>) => (
            <Form noValidate>
              <StyledSection>
                <StyledLabel htmlFor="content">Content</StyledLabel>
                <Field type={"input"} name={"content"} as={StyledInput} />
              </StyledSection>
              <StyledButton type={"submit"} disabled={isSubmitting}>
                Submit
              </StyledButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Comments;
