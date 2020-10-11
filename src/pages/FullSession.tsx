import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSessionById } from "../store/session/sessionActions";
import SessionItem from "./fullSession/SessionItem";
import { FullSessionParams } from "../common/interfaces";
import FullSessionItem from "./fullSession/FullSessionItem";
import * as s from "../styled/sessionStyles";
import SessionSidebar from "./fullSession/SessionSidebar";

function FullSession() {
  const dispatch = useDispatch();
  const { sessionId, eventId } = useParams<FullSessionParams>();

  useEffect(() => {
    dispatch(getSessionById(sessionId));
  }, [dispatch, sessionId, eventId]);

  return (
    <s.SessionWrapper>
      <s.FlexWrapper>
        <SessionSidebar />
        <SessionItem />
      </s.FlexWrapper>
    </s.SessionWrapper>
  );
}

export default FullSession;
