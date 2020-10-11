import Axios from "axios";
import { BASE_EVENT_API_URL } from "../common/constants";
import { EventDetails } from "../common/interfaces";

async function getById(id: string): Promise<EventDetails> {
  const { data: eventDetails } = await Axios.get<EventDetails>(
    `${BASE_EVENT_API_URL}/${id}`,
  );

  return eventDetails;
}

export default { getById };
