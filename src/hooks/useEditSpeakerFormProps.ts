import * as Yup from "yup";
import { FormProps, FormSpeakerInput } from "../common/interfaces";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import {
  editSpeakerById,
  getSpeakerById,
} from "../store/speaker/speakerActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

interface Props {
  id: string;
}

export default function useEditSpeakerFormProps(
  props: Props,
): FormProps<FormSpeakerInput> {
  const history = useHistory();
  const dispatch = useDispatch();

  const { data: speaker } = useSelector((state: RootState) => state.speaker);

  useEffect(() => {
    if (speaker?.id !== props.id) dispatch(getSpeakerById(props.id));
  }, [dispatch, speaker, props.id]);

  async function onSubmit(input: FormSpeakerInput) {
    dispatch(editSpeakerById(props.id, input, history));
  }

  const initialValues = speaker
    ? {
        name: speaker.name,
        photo: speaker.photo,
        bio: speaker.bio,
        headline: speaker.headline,
      }
    : {
        name: "",
        photo: "",
        bio: "",
        headline: "",
      };

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
