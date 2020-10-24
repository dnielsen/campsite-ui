import { Speaker } from "../../common/interfaces";
import { SpeakerAction, SpeakerActionType } from "./speakerActions";

export interface SpeakerState {
  data: Speaker | null;
  loading: boolean;
  error: Error | null;
}

export const initialState: SpeakerState = {
  data: null,
  loading: false,
  error: null,
};

export default function speakerReducer(
  state = initialState,
  action: SpeakerAction,
): SpeakerState {
  switch (action.type) {
    case SpeakerActionType.FETCH_SPEAKER_REQUEST:
      return { ...state, loading: true, error: null };
    case SpeakerActionType.FETCH_SPEAKER_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case SpeakerActionType.FETCH_SPEAKER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
