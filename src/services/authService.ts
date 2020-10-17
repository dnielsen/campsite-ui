import Axios from "axios";
import { FormSignInInput, FormSignUpInput } from "../common/interfaces";
import { BASE_AUTH_API_URL } from "../common/constants";
import { Token } from "../store/auth/authActions";

async function signIn(input: FormSignInInput) {
  const { data: token } = await Axios.post<Token>(
    `${BASE_AUTH_API_URL}/sign-in`,
    input,
  );

  return token;
}

async function signUp(input: FormSignUpInput) {
  const { data: token } = await Axios.post<Token>(
    `${BASE_AUTH_API_URL}/sign-up`,
    input,
  );

  console.log(token);

  return token;
}

export default { signIn, signUp };
