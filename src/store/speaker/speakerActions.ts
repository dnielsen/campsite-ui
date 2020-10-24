import { Dispatch } from "redux";
import { FormSpeakerInput, Speaker } from "../../common/interfaces";
import speakerService from "../../services/speakerService";

export enum SpeakerActionType {
  FETCH_SPEAKER_REQUEST = "FETCH_SPEAKER_REQUEST",
  FETCH_SPEAKER_SUCCESS = "FETCH_SPEAKER_SUCCESS",
  FETCH_SPEAKER_FAILURE = "FETCH_SPEAKER_FAILURE",
}

export type SpeakerAction =
  | FetchSpeakerRequest
  | FetchSpeakerSuccess
  | FetchSpeakerFailure;

export interface FetchSpeakerRequest {
  type: SpeakerActionType.FETCH_SPEAKER_REQUEST;
}

export interface FetchSpeakerSuccess {
  type: SpeakerActionType.FETCH_SPEAKER_SUCCESS;
  payload: {
    data: Speaker;
  };
}

export interface FetchSpeakerFailure {
  type: SpeakerActionType.FETCH_SPEAKER_FAILURE;
  payload: {
    error: Error;
  };
}

function fetchSpeakerRequest(): FetchSpeakerRequest {
  return {
    type: SpeakerActionType.FETCH_SPEAKER_REQUEST,
  };
}

function fetchSpeakerSuccess(data: Speaker): FetchSpeakerSuccess {
  return {
    type: SpeakerActionType.FETCH_SPEAKER_SUCCESS,
    payload: {
      data,
    },
  };
}

function fetchSpeakerFailure(error: Error): FetchSpeakerFailure {
  return {
    type: SpeakerActionType.FETCH_SPEAKER_FAILURE,
    payload: {
      error,
    },
  };
}

export function getSpeakerById(id: string) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchSpeakerRequest());
    try {
      const data = await speakerService.getById(id);
      dispatch(fetchSpeakerSuccess(data));
    } catch (e) {
      dispatch(fetchSpeakerFailure(e));
    }
  };
}

export function editSpeakerById(
  id: string,
  input: FormSpeakerInput,
  // We mean the History type from `react-router-dom`. The package doesn't have
  // this type exported unfortunately.
  history: any,
) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchSpeakerRequest());
    try {
      const speaker = await speakerService.editById(id, input);
      dispatch(fetchSpeakerSuccess(speaker));
      history.push(`/speakers/${speaker.id}`);
    } catch (e) {
      dispatch(fetchSpeakerFailure(e));
    }
  };
}

export function createSpeaker(input: FormSpeakerInput, history: any) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchSpeakerRequest());
    try {
      const speaker = await speakerService.create(input);
      dispatch(fetchSpeakerSuccess(speaker));
      history.push(`/speakers/${speaker.id}`);
    } catch (e) {
      dispatch(fetchSpeakerFailure(e));
    }
  };
}
