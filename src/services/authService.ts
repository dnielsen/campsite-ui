import Axios from "axios";
import { FormSignInInput } from "../common/interfaces";
import { BASE_AUTH_API_URL } from "../common/constants";
import { Token } from "../store/auth/authActions";

async function signIn(input: FormSignInInput) {
  const { data: token } = await Axios.post<Token>(
    `${BASE_AUTH_API_URL}/sign-in`,
    input,
  );

  return token;
}

export default { signIn };
