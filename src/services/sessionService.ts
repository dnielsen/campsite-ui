import Axios from "axios";
import { FetchSessionInput, Session } from "../common/interfaces";
import { BASE_SESSION_API_URL } from "../common/constants";

async function getById(id: string) {
  const { data: session } = await Axios.get<Session>(
    `${BASE_SESSION_API_URL}/${id}`,
  );

  return session;
}

async function create(input: FetchSessionInput) {
  const { data: session } = await Axios.post<Session>(
    `${BASE_SESSION_API_URL}`,
    input,
    {
      withCredentials: true,
    },
  );

  return session;
}

async function edit(id: string, input: FetchSessionInput) {
  const { data: session } = await Axios.put<Session>(
    `${BASE_SESSION_API_URL}/${id}`,
    input,
    {
      withCredentials: true,
    },
  );

  return session;
}

export default { getById, create, edit };
