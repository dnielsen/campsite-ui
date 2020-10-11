import React, { useEffect } from "react";
import CommentList from "./comments/CommentList";
import CreateCommentForm from "./comments/CreateCommentForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCommentsBySessionId,
  getMoreCommentsBySessionId,
} from "../../store/comments/commentsActions";
import { RootState } from "../../store";
import { FullSessionParams } from "../../common/interfaces";

function Comments() {
  const { sessionId } = useParams<FullSessionParams>();
  const dispatch = useDispatch();
  const {
    data: { endCursor },
    loading,
  } = useSelector((state: RootState) => state.comments);

  useEffect(() => {
    dispatch(getCommentsBySessionId(sessionId));
  }, [dispatch, sessionId]);

  function fetchMore() {
    if (endCursor && !loading)
      dispatch(getMoreCommentsBySessionId(sessionId, endCursor));
  }

  return (
    <div>
      <CreateCommentForm />
      <CommentList />
      {endCursor && (
        <button disabled={loading} onClick={fetchMore}>
          fetch more
        </button>
      )}
    </div>
  );
}

export default Comments;
