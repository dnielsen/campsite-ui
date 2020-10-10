import * as Yup from "yup";
import { FormCommentInput } from "../common/interfaces";
import { useDispatch } from "react-redux";
import { createComment } from "../store/comments/commentsActions";

export default function useCreateCommentFormProps(sessionId: string) {
  const dispatch = useDispatch();

  async function onSubmit(input: FormCommentInput, { resetForm }: any) {
    await dispatch(createComment(sessionId, input));
    resetForm();
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
