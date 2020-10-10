import { Dispatch } from "redux";
import { FormSignInInput } from "../../common/interfaces";
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

export function signIn(input: FormSignInInput) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchTokenRequest());
    try {
      console.log("hello");
      const token = await authService.signIn(input);
      console.log("hello");
      localStorage.setItem("token", token);
      console.log("hello1");
      dispatch(fetchTokenSuccess(token));
      console.log("hello1");
    } catch (e) {
      dispatch(fetchTokenFailure(e));
    }
  };
}

export function signOut() {
  return async function (dispatch: Dispatch): Promise<void> {
    localStorage.clear();
    dispatch(resetAuth());
  };
}
