import * as Yup from "yup";
import { FormProps, FormSignInInput } from "../common/interfaces";
import { signIn } from "../store/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../store";

export default function useSignInFormProps(): FormProps<FormSignInInput> {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data: authData, loading, error } = useSelector(
    (state: RootState) => state.auth,
  );
  async function onSubmit(input: FormSignInInput) {
    dispatch(signIn(input, history));
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
