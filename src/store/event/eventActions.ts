import { Dispatch } from "redux";
import { EventDetails } from "../../common/interfaces";
import eventService from "../../services/eventService";

export enum EventActionType {
  FETCH_EVENT_REQUEST = "FETCH_EVENT_REQUEST",
  FETCH_EVENT_SUCCESS = "FETCH_EVENT_SUCCESS",
  FETCH_EVENT_FAILURE = "FETCH_EVENT_FAILURE",
}

export type EventAction =
  | FetchEventRequest
  | FetchEventSuccess
  | FetchEventFailure;

export interface FetchEventRequest {
  type: EventActionType.FETCH_EVENT_REQUEST;
}

export interface FetchEventSuccess {
  type: EventActionType.FETCH_EVENT_SUCCESS;
  payload: {
    data: EventDetails;
  };
}

export interface FetchEventFailure {
  type: EventActionType.FETCH_EVENT_FAILURE;
  payload: {
    error: Error;
  };
}

function fetchEventRequest(): FetchEventRequest {
  return {
    type: EventActionType.FETCH_EVENT_REQUEST,
  };
}

function fetchEventSuccess(data: EventDetails): FetchEventSuccess {
  return {
    type: EventActionType.FETCH_EVENT_SUCCESS,
    payload: {
      data,
    },
  };
}

function fetchEventFailure(error: Error): FetchEventFailure {
  return {
    type: EventActionType.FETCH_EVENT_FAILURE,
    payload: {
      error,
    },
  };
}

export function getEventById(id: string) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchEventRequest());
    try {
      const data = await eventService.getById(id);
      dispatch(fetchEventSuccess(data));
    } catch (e) {
      dispatch(fetchEventFailure(e));
    }
  };
}
