import Axios from "axios";
import { FormSignInInput, Me } from "../common/interfaces";
import { BASE_AUTH_API_URL } from "../common/constants";

async function signIn(input: FormSignInInput) {
  const { data: me } = await Axios.post<Me>(
    `${BASE_AUTH_API_URL}/sign-in`,
    input,
  );

  return me;
}

async function signOut() {
  await Axios.post(
    `${BASE_AUTH_API_URL}/sign-out`,
    {},
    { withCredentials: true },
  );
}

async function authenticate() {
  const { data: me } = await Axios.get<Me>(BASE_AUTH_API_URL, {
    withCredentials: true,
  });

  return me;
}

export default { signIn, signOut, authenticate };
