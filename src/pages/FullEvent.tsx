import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import EventItem from "./fullEvent/EventItem";
import { getEventById } from "../store/event/eventActions";
import { useDispatch } from "react-redux";

function FullEvent() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    dispatch(getEventById(id));
  }, [dispatch, id]);

  return <EventItem />;
}

export default FullEvent;
