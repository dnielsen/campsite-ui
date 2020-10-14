import { AuthAction, AuthActionType } from "./authActions";

interface Auth {
  token: string;
}

export type AuthData = Auth | null | undefined;

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
    case AuthActionType.FETCH_TOKEN_REQUEST:
      return { ...state, loading: true, error: null };
    case AuthActionType.FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...state.data, token: action.payload.data },
      };
    case AuthActionType.FETCH_TOKEN_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload.error,
      };
    case AuthActionType.RESET_AUTH:
      return initialState;
    default:
      return state;
  }
}
