import * as Yup from "yup";
import { FormProps, FormSignUpInput } from "../common/interfaces";
import { signUp } from "../store/auth/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function useSignUpFormProps(): FormProps<FormSignUpInput> {
  const dispatch = useDispatch();
  const history = useHistory();

  async function onSubmit(input: FormSignUpInput) {
    dispatch(signUp(input, history));
  }

  const initialValues: FormSignUpInput = {
    email: "",
    password: "",
    passwordConfirm: "",
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
