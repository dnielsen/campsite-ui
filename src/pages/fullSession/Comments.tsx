import React from "react";
import { Field, Form, Formik, FormikState, FormikValues } from "formik";
import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledSection,
} from "../../styled/styledForm";
import useComments from "../../hooks/useComments";
import { Comment } from "../../common/interfaces";
import util from "../../common/util";

interface Props {
  comments: Comment[] | undefined;
}

function Comments(props: Props) {
  const { comments, formProps } = useComments(props.comments);

  return (
    <div>
      {comments &&
        comments.map((c) => (
          <div key={c.id}>
            <p>{c.content}</p>
            <span>{util.getFullDateString(c.createdAt)}</span>
          </div>
        ))}
      <div>
        <Formik {...formProps}>
          {({ isSubmitting }: FormikState<FormikValues>) => (
            <Form noValidate>
              <StyledSection>
                <StyledLabel htmlFor="content">Content</StyledLabel>
                <Field type={"text"} name={"content"} as={StyledInput} />
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
