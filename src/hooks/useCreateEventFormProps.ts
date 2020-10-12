import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import {
  Event,
  FetchEventInput,
  FormEventInput,
  FormProps,
} from "../common/interfaces";
import { BASE_EVENT_API_URL } from "../common/constants";
import util from "../common/util";
import { authFetch } from "../common/fetch";

export default function useCreateEventFormProps(): FormProps<FormEventInput> {
  const history = useHistory();

  async function onSubmit(input: FormEventInput) {
    // The dates must be of type Date for the backend, however,
    // our DateTimeField needs it in a string form, which is why
    // the form input defines those as strings.
    const fetchInput: FetchEventInput = {
      ...input,
      startDate: new Date(input.startDate),
      endDate: new Date(input.endDate),
    };

    // Send a request to create the event with the input.
    const res = await authFetch(BASE_EVENT_API_URL, {
      method: "POST",
      body: JSON.stringify(fetchInput),
    });

    if (!res.ok) {
      history.push("/auth/sign-in");
      return;
    }

    const createdEvent = (await res.json()) as Event;
    // Redirect to the created session page.
    history.push(`/events/${createdEvent.id}`);
  }

  const now = new Date();
  const initialValues: FormEventInput = {
    name: "",
    description: "",
    address: "",
    organizerName: "",
    photo: "",
    startDate: util.getDateFormValue(now),
    endDate: util.getDateFormValue(now),
  };

  const validationSchema = Yup.object().shape({
    // name: Yup.string().min(2).max(50)
  });

  return { onSubmit, validationSchema, initialValues };
}
