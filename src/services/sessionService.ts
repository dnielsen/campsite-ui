import Axios from "axios";
import { Session } from "../common/interfaces";
import { BASE_SESSION_API_URL } from "../common/constants";

async function getById(id: string) {
  const { data: session } = await Axios.get<Session>(
    `${BASE_SESSION_API_URL}/${id}`,
  );

  return session;
}

export default { getById };
