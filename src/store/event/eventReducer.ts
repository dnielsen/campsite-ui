import { Event } from "../../common/interfaces";
import { EventAction, EventActionType } from "./eventActions";

export interface EventState {
  data: Event | null;
  loading: boolean;
  error: Error | null;
}

export const initialState: EventState = {
  data: null,
  loading: false,
  error: null,
};

export default function eventReducer(
  state = initialState,
  action: EventAction,
): EventState {
  switch (action.type) {
    case EventActionType.FETCH_EVENT_REQUEST:
      return { ...state, loading: true, error: null };
    case EventActionType.FETCH_EVENT_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case EventActionType.FETCH_EVENT_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
