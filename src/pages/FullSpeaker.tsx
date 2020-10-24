import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import SpeakerItem from "./fullSpeaker/SpeakerItem";
import { getSpeakerById } from "../store/speaker/speakerActions";

function FullSpeaker() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(getSpeakerById(id));
  }, [dispatch, id]);

  return <SpeakerItem />;
}

export default FullSpeaker;
