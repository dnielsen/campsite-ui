import * as Yup from "yup";
import { useHistory, useParams } from "react-router-dom";
import { FormCommentInput } from "../common/interfaces";
import { BASE_SESSION_API_URL } from "../common/constants";
import { authFetch } from "../common/fetch";
import { useState } from "react";
import { Comment } from "../common/interfaces";

export default function useComments(
  fetchedComments: Comment[] | undefined,
): {
  comments: Comment[] | undefined;
  // TODO: remove any
  formProps: any;
} {
  const [comments, setComments] = useState(fetchedComments);
  const history = useHistory();
  const { id: sessionId } = useParams<{ id: string }>();

  async function onSubmit(input: FormCommentInput, { resetForm }: any) {
    // Send a request to create the speaker.
    const res = await authFetch(
      `${BASE_SESSION_API_URL}/${sessionId}/comments`,
      {
        method: "POST",
        body: JSON.stringify(input),
      },
    );

    if (!res.ok) {
      history.push("/auth/sign-in");
    } else {
      const createdComment = (await res.json()) as Comment;
      setComments(comments ? [...comments, createdComment] : [createdComment]);
      resetForm();
    }
  }

  const initialValues: FormCommentInput = {
    content: "",
  };

  const validationSchema = Yup.object().shape({});

  const formProps = {
    initialValues,
    onSubmit,
    validationSchema,
  };

  return {
    comments,
    formProps,
  };
}
