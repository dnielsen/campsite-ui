import * as Yup from "yup";
import { useHistory, useParams } from "react-router-dom";
import { FormCommentInput, FormProps } from "../common/interfaces";
import { BASE_SESSION_API_URL } from "../common/constants";
import { authFetch } from "../common/fetch";

export default function useCreateCommentFormProps(): FormProps<
  FormCommentInput
> {
  const history = useHistory();
  const { id: sessionId } = useParams<{ id: string }>();

  async function onSubmit(input: FormCommentInput) {
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
      return;
    }

    history.go(0);
  }

  const initialValues: FormCommentInput = {
    content: "",
  };

  const validationSchema = Yup.object().shape({});

  return {
    onSubmit,
    initialValues,
    validationSchema,
  };
}
