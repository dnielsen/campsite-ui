import * as Yup from "yup";
import { FormProps, FormSignInInput } from "../common/interfaces";
import { signIn } from "../store/auth/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function useSignInFormProps(): FormProps<FormSignInInput> {
  const dispatch = useDispatch();
  const history = useHistory();
  async function onSubmit(input: FormSignInInput) {
    await dispatch(signIn(input));
    history.push(`/`);
  }

  const initialValues: FormSignInInput = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    // name: Yup.string().min(2).max(50)
  });

  return {
    onSubmit,
    validationSchema,
    initialValues,
  };
}
