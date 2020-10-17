import { Dispatch } from "redux";
import { FormSignInInput, FormSignUpInput } from "../../common/interfaces";
import authService from "../../services/authService";

export type Token = string;

export enum AuthActionType {
  FETCH_TOKEN_REQUEST = "FETCH_TOKEN_REQUEST",
  FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS",
  FETCH_TOKEN_FAILURE = "FETCH_TOKEN_FAILURE",
  RESET_AUTH = "RESET_AUTH",
}

export type AuthAction =
  | FetchTokenRequest
  | FetchTokenSuccess
  | FetchTokenFailure
  | ResetAuth;

export interface ResetAuth {
  type: AuthActionType.RESET_AUTH;
}

export interface FetchTokenRequest {
  type: AuthActionType.FETCH_TOKEN_REQUEST;
}

export interface FetchTokenSuccess {
  type: AuthActionType.FETCH_TOKEN_SUCCESS;
  payload: {
    data: Token;
  };
}

export interface FetchTokenFailure {
  type: AuthActionType.FETCH_TOKEN_FAILURE;
  payload: {
    error: Error;
  };
}

function resetAuth(): ResetAuth {
  return {
    type: AuthActionType.RESET_AUTH,
  };
}

function fetchTokenRequest(): FetchTokenRequest {
  return {
    type: AuthActionType.FETCH_TOKEN_REQUEST,
  };
}

function fetchTokenFailure(error: Error): FetchTokenFailure {
  return {
    type: AuthActionType.FETCH_TOKEN_FAILURE,
    payload: {
      error,
    },
  };
}

function fetchTokenSuccess(data: Token): FetchTokenSuccess {
  return {
    type: AuthActionType.FETCH_TOKEN_SUCCESS,
    payload: {
      data,
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
    dispatch(fetchTokenRequest());
    try {
      const token = await authService.signIn(input);
      // localStorage is our temporary solution. We're gonna change it
      // to OAuth2 and cookies later.
      localStorage.setItem("token", token);
      dispatch(fetchTokenSuccess(token));
      // Redirect to the home page when the user signed in successfully.
      history.push(`/`);
    } catch (e) {
      dispatch(fetchTokenFailure(e));
      // Temporarily just refresh the page when the credentials
      // don't match.
      history.go(0);
    }
  };
}

export function signUp(
  input: FormSignUpInput,
  // `history` is of type `History` from the `react-router-dom` package.
  // Unfortunately the package doesn't export this type so we
  // just define it as any.
  history: any,
) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchTokenRequest());
    try {
      const token = await authService.signUp(input);
      // localStorage is our temporary solution. We're gonna change it
      // to OAuth2 and cookies later.
      localStorage.setItem("token", token);
      dispatch(fetchTokenSuccess(token));
      // Redirect to the home page when the user signed up successfully.
      history.push("/");
    } catch (e) {
      dispatch(fetchTokenFailure(e));
      // Temporarily just refresh the page when the there was a sign up error.
      history.go(0);
    }
  };
}

export function signOut() {
  return async function (dispatch: Dispatch): Promise<void> {
    localStorage.clear();
    dispatch(resetAuth());
  };
}

export function authenticate() {
  return async function (dispatch: Dispatch): Promise<void> {
    // TODO: refactor, (this code makes no sense, it's a temporary solution,
    // later we're gonna use cookies)
    dispatch(fetchTokenRequest());
    const token = localStorage.getItem("token");
    try {
      // Temporary solution, for explanation see the comment above.
      if (!token) throw new Error("Not authenticated");
      dispatch(fetchTokenSuccess(token));
    } catch (e) {
      dispatch(fetchTokenFailure(e));
    }
  };
}
