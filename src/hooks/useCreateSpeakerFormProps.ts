import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { FormProps, FormSpeakerInput } from "../common/interfaces";
import { createSpeaker } from "../store/speaker/speakerActions";
import { useDispatch } from "react-redux";

export default function useCreateSpeakerFormProps(): FormProps<
  FormSpeakerInput
> {
  const history = useHistory();
  const dispatch = useDispatch();

  async function onSubmit(input: FormSpeakerInput) {
    dispatch(createSpeaker(input, history));
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
