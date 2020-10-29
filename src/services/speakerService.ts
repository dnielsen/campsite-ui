import Axios from "axios";
import { FormSpeakerInput, Speaker } from "../common/interfaces";
import { BASE_SPEAKER_API_URL } from "../common/constants";

async function getAll() {
  const { data: speakers } = await Axios.get<Speaker[]>(BASE_SPEAKER_API_URL);

  return speakers;
}

async function getById(id: string) {
  const { data: speaker } = await Axios.get<Speaker>(
    `${BASE_SPEAKER_API_URL}/${id}`,
  );

  return speaker;
}

async function create(input: FormSpeakerInput) {
  const { data: speaker } = await Axios.post<Speaker>(
    `${BASE_SPEAKER_API_URL}`,
    input,
    {
      withCredentials: true,
    },
  );

  // const data = await fetch(`${BASE_SPEAKER_API_URL}`, { body: JSON.stringify(input), {} });
  //
  // const speaker = await data.json();
  return speaker;
}

async function editById(id: string, input: FormSpeakerInput) {
  const { data: session } = await Axios.put<Speaker>(
    `${BASE_SPEAKER_API_URL}/${id}`,
    input,
    {
      withCredentials: true,
    },
  );

  return session;
}

export default { getAll, getById, create, editById };
