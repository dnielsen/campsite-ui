import { Dispatch } from "redux";
import { Event } from "../../common/interfaces";
import eventService from "../../services/eventService";

export enum EventsActionType {
  FETCH_EVENTS_REQUEST = "FETCH_EVENTS_REQUEST",
  FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS",
  FETCH_EVENTS_FAILURE = "FETCH_EVENTS_FAILURE",
}

export type EventsAction =
  | FetchEventsRequest
  | FetchEventsSuccess
  | FetchEventsFailure;

export interface FetchEventsRequest {
  type: EventsActionType.FETCH_EVENTS_REQUEST;
}

export interface FetchEventsSuccess {
  type: EventsActionType.FETCH_EVENTS_SUCCESS;
  payload: {
    data: Event[];
  };
}

export interface FetchEventsFailure {
  type: EventsActionType.FETCH_EVENTS_FAILURE;
  payload: {
    error: Error;
  };
}

function fetchEventsRequest(): FetchEventsRequest {
  return {
    type: EventsActionType.FETCH_EVENTS_REQUEST,
  };
}

function fetchEventsSuccess(data: Event[]): FetchEventsSuccess {
  return {
    type: EventsActionType.FETCH_EVENTS_SUCCESS,
    payload: {
      data,
    },
  };
}

function fetchEventsFailure(error: Error): FetchEventsFailure {
  return {
    type: EventsActionType.FETCH_EVENTS_FAILURE,
    payload: {
      error,
    },
  };
}

export function getEvents() {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchEventsRequest());
    try {
      const data = await eventService.getMany();
      dispatch(fetchEventsSuccess(data));
    } catch (e) {
      dispatch(fetchEventsFailure(e));
    }
  };
}
