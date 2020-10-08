import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import {
  FormProps,
  FormSpeakerInput,
  SpeakerPreview,
} from "../common/interfaces";
import { BASE_SPEAKER_API_URL } from "../common/constants";
import { authFetch } from "../common/fetch";

export default function useCreateSpeakerFormProps(): FormProps<
  FormSpeakerInput
> {
  const history = useHistory();

  async function onSubmit(input: FormSpeakerInput) {
    // Send a request to create the speaker.
    const res = await authFetch(BASE_SPEAKER_API_URL, {
      method: "POST",
      body: JSON.stringify(input),
    });

    if (!res.ok) {
      history.push("/auth/sign-in");
      return;
    }

    const createdSpeaker = (await res.json()) as SpeakerPreview;
    // Redirect to the created speaker page.
    history.push(`/speakers/${createdSpeaker.id}`);
  }

  const initialValues: FormSpeakerInput = {
    name: "",
    photo: "",
    headline: "",
    bio: "",
  };

  const validationSchema = Yup.object().shape({});

  return {
    onSubmit,
    initialValues,
    validationSchema,
  };
}
