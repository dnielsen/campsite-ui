import * as Yup from "yup";
import { FormCommentInput } from "../common/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../store/comments/commentsActions";
import { RootState } from "../store";
import { useHistory } from "react-router-dom";

export default function useCreateCommentFormProps(sessionId: string) {
  const dispatch = useDispatch();
  const { data: authData } = useSelector((state: RootState) => state.auth);
  const history = useHistory();

  async function onSubmit(input: FormCommentInput, { resetForm }: any) {
    if (!authData) {
      history.push(`/auth/sign-in`);
    } else {
      await dispatch(createComment(sessionId, input));
      resetForm();
    }
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
