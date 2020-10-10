import Axios from "axios";
import { FormCommentInput, PaginatedDataBase } from "../common/interfaces";
import { BASE_SESSION_API_URL } from "../common/constants";
import { Comment } from "../common/interfaces";

export interface FetchCommentsData extends PaginatedDataBase {
  comments: Comment[];
}

async function getBySessionId(sessionId: string, cursor?: string) {
  const { data } = await Axios.get<FetchCommentsData>(
    `${BASE_SESSION_API_URL}/${sessionId}/comments`,
    {
      params: {
        cursor,
      },
    },
  );

  return data;
}

async function create(sessionId: string, input: FormCommentInput) {
  const { data: comment } = await Axios.post<Comment>(
    `${BASE_SESSION_API_URL}/${sessionId}/comments`,
    input,
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    },
  );
  return comment;
}

export default { getBySessionId, create };
