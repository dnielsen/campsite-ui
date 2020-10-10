import React from "react";
import {
  StyledCommentContainer,
  StyledCommentContent,
  StyledCommentCreatedAt,
} from "../../../styled/styledSession";
import util from "../../../common/util";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

function CommentList() {
  const {
    data: { comments },
    loading,
    error,
  } = useSelector((state: RootState) => state.comments);

  if (!comments && loading) return <div>loading...</div>;
  if (error) return <div>error: {error.message}</div>;

  return (
    <div>
      <ul>
        {comments.map((c) => (
          <StyledCommentContainer key={c.id}>
            <li>
              <StyledCommentContent>{c.content}</StyledCommentContent>
              <StyledCommentCreatedAt>
                {util.getFullDateString(c.createdAt)}
              </StyledCommentCreatedAt>
            </li>
          </StyledCommentContainer>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
