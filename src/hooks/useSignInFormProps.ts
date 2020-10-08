import * as Yup from "yup";
import { FormProps, FormSignInInput } from "../common/interfaces";
import { BASE_AUTH_API_URL } from "../common/constants";
import { useHistory } from "react-router-dom";

export default function useSignInFormProps(): FormProps<FormSignInInput> {
  const history = useHistory();

  async function onSubmit(input: FormSignInInput) {
    // Send a request to edit the event with the input.
    const res = await fetch(`${BASE_AUTH_API_URL}/sign-in`, {
      method: "POST",
      body: JSON.stringify(input),
      credentials: "include",
    });

    if (!res.ok) {
      // It's gonna reload the page when unauthorized.
      // It's a temporary solution.
      history.go(0);
    } else {
      const token = await res.text();
      localStorage.setItem("token", token);
      // Redirect to the homepage.
      history.push("/");
    }
  }

  // If event details have been fetched then put them in,
  // else leave the properties empty.
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
