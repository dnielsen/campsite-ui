import { AuthAction, AuthActionType } from "./authActions";
import { Me } from "../../common/interfaces";

export type AuthData = Me | null | undefined;

export interface AuthState {
  data: AuthData;
  loading: boolean;
  error: Error | null;
}

export const initialState: AuthState = {
  data: undefined,
  loading: false,
  error: null,
};

export default function authReducer(
  state = initialState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case AuthActionType.FETCH_AUTHENTICATE_REQUEST:
      return { ...state, loading: true, error: null };
    case AuthActionType.FETCH_AUTHENTICATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case AuthActionType.FETCH_AUTHENTICATE_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload.error,
      };
    case AuthActionType.RESET_AUTH:
      return { data: null, loading: false, error: null };
    default:
      return state;
  }
}
