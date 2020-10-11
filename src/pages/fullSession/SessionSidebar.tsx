import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SessionSidebarItem from "./sessionSidebar/sessionSidebarItem";
import { useDispatch, useSelector } from "react-redux";
import { getEventById } from "../../store/event/eventActions";
import { FullSessionParams } from "../../common/interfaces";
import { RootState } from "../../store";

function SessionSidebar() {
  const dispatch = useDispatch();
  const { eventId } = useParams<FullSessionParams>();
  const { data: eventDetails } = useSelector((state: RootState) => state.event);

  useEffect(() => {
    // TODO: getEventSessionSidebar(eventId)
    // dispatch(getEventSessionSidebar(eventId));
    if (eventDetails?.id !== eventId) dispatch(getEventById(eventId));
  }, [dispatch, eventId, eventDetails?.id]);

  return <SessionSidebarItem />;
}

export default SessionSidebar;
