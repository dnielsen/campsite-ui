import commentService, { CommentsData } from "../../services/commentService";
import { Dispatch } from "redux";
import { Comment, FormCommentInput } from "../../common/interfaces";

export enum CommentsActionType {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",
  FETCH_MORE_COMMENTS_SUCCESS = "FETCH_MORE_COMMENTS_SUCCESS",
  ADD_COMMENT = "ADD_COMMENT",
}

export type CommentsAction =
  | FetchCommentsRequest
  | FetchCommentsFailure
  | FetchCommentsSuccess
  | AddComment
  | FetchMoreCommentsSuccess;

export interface AddComment {
  type: CommentsActionType.ADD_COMMENT;
  payload: {
    data: Comment;
  };
}

export interface FetchCommentsRequest {
  type: CommentsActionType.FETCH_COMMENTS_REQUEST;
}

export interface FetchCommentsFailure {
  type: CommentsActionType.FETCH_COMMENTS_FAILURE;
  payload: {
    error: Error;
  };
}

export interface FetchCommentsSuccess {
  type: CommentsActionType.FETCH_COMMENTS_SUCCESS;
  payload: {
    data: CommentsData;
  };
}

export interface FetchMoreCommentsSuccess {
  type: CommentsActionType.FETCH_MORE_COMMENTS_SUCCESS;
  payload: {
    data: CommentsData;
  };
}

function fetchCommentsRequest(): FetchCommentsRequest {
  return {
    type: CommentsActionType.FETCH_COMMENTS_REQUEST,
  };
}

function fetchCommentsFailure(error: Error): FetchCommentsFailure {
  return {
    type: CommentsActionType.FETCH_COMMENTS_FAILURE,
    payload: {
      error,
    },
  };
}

function fetchCommentsSuccess(data: CommentsData): FetchCommentsSuccess {
  return {
    type: CommentsActionType.FETCH_COMMENTS_SUCCESS,
    payload: {
      data,
    },
  };
}

function addComment(data: Comment): AddComment {
  return {
    type: CommentsActionType.ADD_COMMENT,
    payload: {
      data,
    },
  };
}

function fetchMoreCommentsSuccess(
  data: CommentsData,
): FetchMoreCommentsSuccess {
  return {
    type: CommentsActionType.FETCH_MORE_COMMENTS_SUCCESS,
    payload: {
      data,
    },
  };
}

export function getCommentsBySessionId(sessionId: string) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchCommentsRequest());
    try {
      const data = await commentService.getBySessionId(sessionId);
      dispatch(fetchCommentsSuccess(data));
    } catch (e) {
      dispatch(fetchCommentsFailure(e));
    }
  };
}

export function getMoreCommentsBySessionId(
  sessionId: string,
  endCursor: string,
) {
  return async function (dispatch: Dispatch): Promise<void> {
    dispatch(fetchCommentsRequest());
    try {
      const data = await commentService.getBySessionId(sessionId, endCursor);
      dispatch(fetchMoreCommentsSuccess(data));
    } catch (e) {
      dispatch(fetchCommentsFailure(e));
    }
  };
}

export function createComment(sessionId: string, input: FormCommentInput) {
  return async function (dispatch: Dispatch): Promise<void> {
    const comment = await commentService.create(sessionId, input);
    dispatch(addComment(comment));
  };
}
