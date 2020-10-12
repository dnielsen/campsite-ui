import { Event } from "../../common/interfaces";
import { EventsAction, EventsActionType } from "./eventsActions";

export interface EventsState {
  data: Event[];
  loading: boolean;
  error: Error | null;
}

export const initialState: EventsState = {
  data: [],
  loading: false,
  error: null,
};

export default function eventsReducer(
  state = initialState,
  action: EventsAction,
): EventsState {
  switch (action.type) {
    case EventsActionType.FETCH_EVENTS_REQUEST:
      return { ...state, loading: true, error: null };
    case EventsActionType.FETCH_EVENTS_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case EventsActionType.FETCH_EVENTS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
