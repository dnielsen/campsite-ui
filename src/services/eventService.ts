import Axios from "axios";
import { BASE_EVENT_API_URL } from "../common/constants";
import { Event, FetchEventInput } from "../common/interfaces";

async function getById(id: string) {
  const { data: event } = await Axios.get<Event>(`${BASE_EVENT_API_URL}/${id}`);

  return event;
}

async function getAll() {
  const { data: events } = await Axios.get<Event[]>(BASE_EVENT_API_URL);

  return events;
}

async function editById(id: string, input: FetchEventInput) {
  // We'll change the JWT in local storage into cookie/OAuth authentication.
  const { data: event } = await Axios.put<Event>(
    `${BASE_EVENT_API_URL}/${id}`,
    input,
    { withCredentials: true },
  );

  return event;
}

async function create(input: FetchEventInput) {
  const { data: event } = await Axios.post<Event>(
    `${BASE_EVENT_API_URL}`,
    input,
    { withCredentials: true },
  );

  return event;
}

export default { getAll, getById, editById, create };
