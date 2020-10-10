import { CommentsAction, CommentsActionType } from "./commentsActions";
import { FetchCommentsData } from "../../services/commentService";

export interface CommentsState {
  data: FetchCommentsData;
  loading: boolean;
  error: Error | null;
}

export const initialState: CommentsState = {
  data: {
    comments: [],
    endCursor: null,
  },
  loading: false,
  error: null,
};

export default function commentsReducer(
  state = initialState,
  action: CommentsAction,
): CommentsState {
  switch (action.type) {
    case CommentsActionType.FETCH_COMMENTS_REQUEST:
      return { ...state, loading: true, error: null };
    case CommentsActionType.FETCH_COMMENTS_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case CommentsActionType.FETCH_COMMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case CommentsActionType.FETCH_MORE_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          comments: state.data.comments.concat(action.payload.data.comments),
          endCursor: action.payload.data.endCursor,
        },
      };
    case CommentsActionType.ADD_COMMENT:
      return {
        ...state,
        data: {
          ...state.data,
          comments: [action.payload.data, ...state.data.comments],
        },
      };
    default:
      return state;
  }
}
