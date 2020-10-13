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
  console.log(sessionId, eventId);
  useEffect(() => {
    dispatch(getSessionById(sessionId));
  }, [dispatch, sessionId, eventId]);

  return (
    <s.StyledSessionContainer>
      <s.StyledFlexContainer>
        <SessionSidebar />
        <SessionItem />
      </s.StyledFlexContainer>
    </s.StyledSessionContainer>
  );
}

export default FullSession;
