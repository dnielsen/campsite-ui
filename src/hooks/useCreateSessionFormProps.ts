import * as Yup from "yup";
import {
  FetchSessionInput,
  FormProps,
  FormSessionInput,
} from "../common/interfaces";
import { useHistory } from "react-router-dom";
import util from "../common/util";
import { useDispatch } from "react-redux";
import { createSession } from "../store/session/sessionActions";

interface Props {
  eventId: string;
}

export default function useCreateSessionFormProps(
  props: Props,
): FormProps<FormSessionInput> {
  const history = useHistory();
  const dispatch = useDispatch();

  async function onSubmit(input: FormSessionInput) {
    // Replace speakerOptions property with speakerIds.
    const fetchInput: FetchSessionInput = {
      ...input,
      startDate: new Date(input.startDate),
      endDate: new Date(input.endDate),
    };

    dispatch(createSession(fetchInput, history));
  }

  // For example: `06/27/2020 5:06 PM`
  const now = new Date();
  const initialValues: FormSessionInput = {
    name: "",
    description: "",
    url: "",
    startDate: util.getDateFormValue(now),
    endDate: util.getDateFormValue(now),
    eventId: props.eventId,
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
