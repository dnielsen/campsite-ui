import Axios from "axios";
import { BASE_EVENT_API_URL } from "../common/constants";
import { Event, FetchEventInput, FormEventInput } from "../common/interfaces";

async function getById(id: string) {
  const { data: event } = await Axios.get<Event>(`${BASE_EVENT_API_URL}/${id}`);

  return event;
}

async function editById(id: string, input: FetchEventInput) {
  // We'll change the JWT in local storage into cookie/OAuth authentication.
  const token = localStorage.getItem("token");
  const { data: event } = await Axios.put<Event>(
    `${BASE_EVENT_API_URL}/${id}`,
    input,
    { headers: { Authorization: token } },
  );

  return event;
}

export default { getById, editById };
