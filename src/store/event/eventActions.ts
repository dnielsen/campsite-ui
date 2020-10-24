import { Dispatch } from "redux";
import { Event, FetchEventInput } from "../../common/interfaces";
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
    data: Event;
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

function fetchEventSuccess(data: Event): FetchEventSuccess {
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

export function editEventById(
  id: string,
  input: FetchEventInput,
  // We mean the History type from `react-router-dom`. The package doesn't have
  // this type exported unfortunately.
  history: any,
) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchEventRequest());
    try {
      const event = await eventService.editById(id, input);
      dispatch(fetchEventSuccess(event));
      history.push(`/events/${event.id}`);
    } catch (e) {
      dispatch(fetchEventFailure(e));
    }
  };
}

export function createEvent(input: FetchEventInput, history: any) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchEventRequest());
    try {
      const event = await eventService.create(input);
      dispatch(fetchEventSuccess(event));
      history.push(`/events/${event.id}`);
    } catch (e) {
      dispatch(fetchEventFailure(e));
    }
  };
}
