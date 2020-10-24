import * as Yup from "yup";
import {
  FetchSessionInput,
  FormProps,
  FormSessionInput,
} from "../common/interfaces";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import util from "../common/util";
import {
  editSessionById,
  getSessionById,
} from "../store/session/sessionActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

interface Props {
  id: string;
}

export default function useEditSessionFormProps(
  props: Props,
): FormProps<FormSessionInput> {
  const history = useHistory();
  const dispatch = useDispatch();

  const { data: session } = useSelector((state: RootState) => state.session);

  useEffect(() => {
    if (session?.id !== props.id) dispatch(getSessionById(props.id));
  }, [dispatch, session, props.id]);

  async function onSubmit(input: FormSessionInput) {
    // The dates must be of type Date for the backend, however,
    // our DateTimeField needs it in a string form, which is why
    // the form input defines those as strings.
    const fetchInput: FetchSessionInput = {
      ...input,
      startDate: new Date(input.startDate),
      endDate: new Date(input.endDate),
    };

    dispatch(editSessionById(props.id, fetchInput, history));
  }

  const initialValues = session
    ? {
        name: session.name,
        description: session.description,
        url: session.url,
        startDate: session.startDate,
        endDate: session.endDate,
        speakerIds: session.speakers ? session.speakers.map((s) => s.id) : [],
        eventId: session.eventId,
      }
    : {
        name: "",
        description: "",
        url: "",
        startDate: util.getDateFormValue(new Date()),
        endDate: util.getDateFormValue(new Date()),
        speakerIds: [],
        eventId: "",
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
