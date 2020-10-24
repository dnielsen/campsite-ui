import { Dispatch } from "redux";
import sessionService from "../../services/sessionService";
import { FetchSessionInput, Session } from "../../common/interfaces";

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

function fetchSessionRequest(): FetchSessionRequest {
  return {
    type: SessionActionType.FETCH_SESSION_REQUEST,
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
    dispatch(fetchSessionRequest());
    try {
      const session = await sessionService.getById(id);
      dispatch(fetchSessionSuccess(session));
    } catch (e) {
      dispatch(fetchSessionFailure(e));
    }
  };
}

export function createSession(
  input: FetchSessionInput,
  // `history` is of type `History` from `react-router-dom` package.
  // It doesn't export this type unfortunately so we're just
  // declaring it as any.
  history: any,
) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchSessionRequest());
    try {
      const session = await sessionService.create(input);
      dispatch(fetchSessionSuccess(session));
      history.push(`/events/${session.eventId}/sessions/${session.id}`);
    } catch (e) {
      dispatch(fetchSessionFailure(e));
    }
  };
}

export function editSessionById(
  id: string,
  input: FetchSessionInput,
  history: any,
) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchSessionRequest());
    try {
      const session = await sessionService.edit(id, input);
      dispatch(fetchSessionSuccess(session));
      history.push(`/events/${session.eventId}/sessions/${session.id}`);
    } catch (e) {
      dispatch(fetchSessionFailure(e));
    }
  };
}
