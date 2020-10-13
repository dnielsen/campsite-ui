import * as Yup from "yup";
import {
  FetchSessionInput,
  FormProps,
  FormSessionInput,
  Session,
} from "../common/interfaces";
import { BASE_SESSION_API_URL } from "../common/constants";
import { useHistory } from "react-router-dom";
import { authFetch } from "../common/fetch";
import { useEffect, useState } from "react";
import util from "../common/util";

interface Props {
  id: string;
}

export default function useEditSession(
  props: Props,
): FormProps<FormSessionInput> {
  const history = useHistory();
  const [initialValues, setInitialValues] = useState<FormSessionInput>({
    url: "",
    startDate: util.getDateFormValue(new Date()),
    speakerIds: [],
    name: "",
    endDate: "",
    description: "",
    eventId: "",
  });
  // We currently don't handle the loading state.
  const [loading, setLoading] = useState(false);
  // We currently don't handle the error if any occurs.
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      setLoading(true);
      const res = await fetch(`${BASE_SESSION_API_URL}/${props.id}`);
      if (!res.ok) {
        setError(null);
      } else {
        const session = (await res.json()) as Session;
        setInitialValues({
          name: session.name,
          description: session.description,
          startDate: util.getDateFormValue(session.startDate),
          endDate: util.getDateFormValue(session.endDate),
          url: session.url,
          speakerIds: session.speakers.map((s) => s.id),
          eventId: session.eventId,
        });
      }
      setLoading(false);
    })();
  }, [props.id]);

  async function onSubmit(input: FormSessionInput) {
    // The dates must be of type Date for the backend, however,
    // our DateTimeField needs it in a string form, which is why
    // the form input defines those as strings.
    const fetchInput: FetchSessionInput = {
      ...input,
      startDate: new Date(input.startDate),
      endDate: new Date(input.endDate),
    };

    // Send a request to edit the event with the input.
    const res = await authFetch(`${BASE_SESSION_API_URL}/${props.id}`, {
      method: "PUT",
      body: JSON.stringify(fetchInput),
    });

    if (!res.ok) {
      history.push("/auth/sign-in");
    } else {
      // Redirect to the edited event page.
      history.push(`/events/${fetchInput.eventId}/sessions/${props.id}`);
    }
  }

  const validationSchema = Yup.object().shape({
    // name: Yup.string().min(2).max(50)
  });

  return {
    onSubmit,
    validationSchema,
    initialValues,
    enableReinitialize: true,
  };
}
