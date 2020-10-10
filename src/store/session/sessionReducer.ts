import { Session } from "../../common/interfaces";
import { SessionAction, SessionActionType } from "./sessionActions";

export interface SessionState {
  data: Session | null;
  loading: boolean;
  error: Error | null;
}

export const initialState: SessionState = {
  data: null,
  loading: false,
  error: null,
};

export default function sessionReducer(
  state = initialState,
  action: SessionAction,
): SessionState {
  switch (action.type) {
    case SessionActionType.FETCH_SESSION_REQUEST:
      return { ...state, loading: true, error: null };
    case SessionActionType.FETCH_SESSION_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case SessionActionType.FETCH_SESSION_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
