import * as Yup from "yup";
import {
  FetchSessionInput,
  FormProps,
  FormSessionInput,
  SessionPreview,
} from "../common/interfaces";
import { BASE_SESSION_API_URL } from "../common/constants";
import { useHistory } from "react-router-dom";
import util from "../common/util";
import { authFetch } from "../common/fetch";

interface Props {
  eventId: string;
}

export default function useCreateSessionFormProps(
  props: Props,
): FormProps<FormSessionInput> {
  const history = useHistory();

  async function onSubmit(input: FormSessionInput) {
    // Replace speakerOptions property with speakerIds.
    const fetchInput: FetchSessionInput = {
      ...input,
      startDate: new Date(input.startDate),
      endDate: new Date(input.endDate),
    };

    // Send a request to create the session.
    const res = await authFetch(`${BASE_SESSION_API_URL}`, {
      method: "POST",
      body: JSON.stringify(fetchInput),
    });

    if (!res.ok) {
      history.push("/auth/sign-in");
      return;
    }

    const createdSession = (await res.json()) as SessionPreview;
    // Redirect to the created session page.
    history.push(`/sessions/${createdSession.id}`);
  }

  // For example: `06/27/2020 5:06 PM`
  const now = new Date();
  const initialValues: FormSessionInput = {
    name: "",
    description: "",
    url: "",
    startDate: util.getDateFormValue(now),
    endDate: util.getDateFormValue(now),
    eventId: props.eventId ?? "",
    speakerIds: [],
  };

  const validationSchema = Yup.object().shape({});

  return {
    onSubmit,
    validationSchema,
    initialValues,
    enableReinitialize: true,
  };
}
