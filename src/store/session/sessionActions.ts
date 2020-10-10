import { Dispatch } from "redux";
import sessionService from "../../services/sessionService";
import { Session } from "../../common/interfaces";

export type SessionAction =
  | FetchSessionRequest
  | FetchSessionFailure
  | FetchSessionSuccess;

export enum SessionActionType {
  FETCH_SESSION_REQUEST = "FETCH_SESSION_REQUEST",
  FETCH_SESSION_SUCCESS = "FETCH_SESSION_SUCCESS",
  FETCH_SESSION_FAILURE = "FETCH_SESSION_FAILURE",
}

export interface FetchSessionRequest {
  type: SessionActionType.FETCH_SESSION_REQUEST;
  payload: {
    id: string;
  };
}

export interface FetchSessionFailure {
  type: SessionActionType.FETCH_SESSION_FAILURE;
  payload: {
    error: Error;
  };
}

export interface FetchSessionSuccess {
  type: SessionActionType.FETCH_SESSION_SUCCESS;
  payload: {
    data: Session;
  };
}

function fetchSessionRequest(id: string): FetchSessionRequest {
  return {
    type: SessionActionType.FETCH_SESSION_REQUEST,
    payload: {
      id,
    },
  };
}

function fetchSessionSuccess(data: Session): FetchSessionSuccess {
  return {
    type: SessionActionType.FETCH_SESSION_SUCCESS,
    payload: {
      data,
    },
  };
}

function fetchSessionFailure(error: Error): FetchSessionFailure {
  return {
    type: SessionActionType.FETCH_SESSION_FAILURE,
    payload: {
      error,
    },
  };
}

export function getSessionById(id: string) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchSessionRequest(id));
    try {
      const session = await sessionService.getById(id);
      dispatch(fetchSessionSuccess(session));
    } catch (e) {
      dispatch(fetchSessionFailure(e));
    }
  };
}
