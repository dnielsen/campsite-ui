import * as Yup from "yup";
import {
  FetchEventInput,
  FormEventInput,
  FormProps,
} from "../common/interfaces";
import { BASE_EVENT_API_URL } from "../common/constants";
import util from "../common/util";
import { useHistory } from "react-router-dom";
import { authFetch } from "../common/fetch";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { editEventById, getEventById } from "../store/event/eventActions";

interface Props {
  id: string;
}

export default function useEditEventFormProps(
  props: Props,
): FormProps<FormEventInput> {
  const history = useHistory();
  const dispatch = useDispatch();

  const { data: event } = useSelector((state: RootState) => state.event);

  if (event?.id !== props.id) dispatch(getEventById(props.id));

  async function onSubmit(input: FormEventInput) {
    // The dates must be of type Date for the backend, however,
    // our DateTimeField needs it in a string form, which is why
    // the form input defines those as strings.
    const fetchInput: FetchEventInput = {
      ...input,
      startDate: new Date(input.startDate),
      endDate: new Date(input.endDate),
    };

    // Send a request to edit the event with the input.
    dispatch(editEventById(props.id, fetchInput, history));
  }

  // If event details have been fetched then put them in,
  // else leave the properties empty.
  const initialValues: FormEventInput = event
    ? {
        name: event.name,
        description: event.description,
        address: event.address,
        organizerName: event.organizerName,
        photo: event.photo,
        startDate: util.getDateFormValue(event.startDate),
        endDate: util.getDateFormValue(event.endDate),
      }
    : {
        name: "",
        description: "",
        address: "",
        organizerName: "",
        photo: "",
        startDate: "",
        endDate: "",
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
