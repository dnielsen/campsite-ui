import { Dispatch } from "redux";
import { FormSignInInput } from "../../common/interfaces";
import authService from "../../services/authService";
import { AuthData } from "./authReducer";

export enum AuthActionType {
  FETCH_AUTHENTICATE_REQUEST = "FETCH_AUTHENTICATE_REQUEST",
  FETCH_AUTHENTICATE_SUCCESS = "FETCH_AUTHENTICATE_SUCCESS",
  FETCH_AUTHENTICATE_FAILURE = "FETCH_AUTHENTICATE_FAILURE",
  RESET_AUTH = "RESET_AUTH",
}

export type AuthAction =
  | FetchAuthenticateRequest
  | FetchAuthenticateSuccess
  | FetchAuthenticateFailure
  | ResetAuth;

export interface ResetAuth {
  type: AuthActionType.RESET_AUTH;
}

export interface FetchAuthenticateRequest {
  type: AuthActionType.FETCH_AUTHENTICATE_REQUEST;
}

export interface FetchAuthenticateSuccess {
  type: AuthActionType.FETCH_AUTHENTICATE_SUCCESS;
  payload: {
    data: AuthData;
  };
}

export interface FetchAuthenticateFailure {
  type: AuthActionType.FETCH_AUTHENTICATE_FAILURE;
  payload: {
    error: Error;
  };
}

function resetAuth(): ResetAuth {
  return {
    type: AuthActionType.RESET_AUTH,
  };
}

function fetchAuthenticateRequest(): FetchAuthenticateRequest {
  return {
    type: AuthActionType.FETCH_AUTHENTICATE_REQUEST,
  };
}

function fetchAuthenticateSuccess(data: AuthData): FetchAuthenticateSuccess {
  return {
    type: AuthActionType.FETCH_AUTHENTICATE_SUCCESS,
    payload: {
      data,
    },
  };
}

function fetchAuthenticateFailure(error: Error): FetchAuthenticateFailure {
  return {
    type: AuthActionType.FETCH_AUTHENTICATE_FAILURE,
    payload: {
      error,
    },
  };
}

export function signIn(
  input: FormSignInInput,
  // history is of type History from the `react-router-dom` package.
  // Unfortunately the package doesn't export this type so we
  // just define it as any.
  history: any,
) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchAuthenticateRequest());
    try {
      const me = await authService.signIn(input);
      dispatch(fetchAuthenticateSuccess(me));
      // Redirect to the home page when the user signed in successfully.
      history.push("/");
    } catch (e) {
      dispatch(fetchAuthenticateFailure(e));
      // Temporarily just refresh the page when the credentials
      // don't match.
      history.go(0);
    }
  };
}

export function signOut() {
  return async function (dispatch: Dispatch): Promise<void> {
    await authService.signOut();
    dispatch(resetAuth());
  };
}

export function authenticate() {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchAuthenticateRequest());
    try {
      const authData = await authService.authenticate();
      dispatch(fetchAuthenticateSuccess(authData));
    } catch (e) {
      dispatch(fetchAuthenticateFailure(e));
    }
  };
}
