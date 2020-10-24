import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import {
  FetchEventInput,
  FormEventInput,
  FormProps,
} from "../common/interfaces";
import util from "../common/util";
import { createEvent } from "../store/event/eventActions";

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

    createEvent(fetchInput, history);
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
