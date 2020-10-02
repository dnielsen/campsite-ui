// import styled component
import styled from "styled-components";

export const SessionWrapper = styled.div`
  background: #f5f5f5;
  padding: 30px 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 50px 0;

  @media (max-width: 767px) {
    padding: 0;
    border: none;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const FlexWrapperSpeakers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const SessionListWrapper = styled.div`
  background: #fff;
  padding: 15px;
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.18);
  position: relative;
  margin-right: 15px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  flex: 0 0 20%;

  @media (max-width: 991px) {
    margin: 0;
  }

  @media (max-width: 767px) {
    margin: 0;
  }

  h2 {
    margin: 0;
  }

  ul {
    padding: 0;
    list-style: none;
    margin: 20px 0 0;
  }

  li {
    border-bottom: 1px solid #ccc;
    padding: 0.8em;
    font-size: 0.9em;
    color: #414141;
    font-weight: 500;
  }

  .active {
    background: #f5f5f5;
  }
`;

export const SessionDetailWrapper = styled.div`
  flex: 1;
  position: relative;
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.18);

  @media (max-width: 991px) {
    margin: 15px 0px;
    text-align: center;
  }

  h2 {
    color: #414141;
  }

  p {
    font-size: 14px;
    color: #414141;
  }
`;

export const SpeakerSessionScheduleWrapper = styled.div`
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  padding: 0px 15px;
  color: #414141;
  font-size: 14px;
  border: 1px solid #e3e3e3;
  font-weight: 600;
  border-radius: 8px;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  div {
    margin: 15px;

    @media (max-width: 991px) {
      flex: 1;
    }
  }
`;

export const SpeakerPhoto = styled.div`
  border: 5px solid #fff;
  border-radius: 50%;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

export const SpeakerName = styled.p`
  color: #2faad9;
  font-size: 16px;
  font-weight: 600;
  margin: 5px 0px;
`;

export const SpeakerTitle = styled.p`
  color: #414141;
  font-size: 14px;
  font-weight: 600;
  margin: 5px 0px;
`;

export const SpeakerSocialMedia = styled.div`
  margin: 20px 0px;

  a {
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 10px;
    color: #414141;
    font-weight: 500;
    margin-right: 15px;
  }

  i.twitter {
    color: #34c4f2;
    font-size: 20px;
    margin-right: 7px;
  }

  i.linkedin {
    color: #0274b3;
    font-size: 20px;
    margin-right: 7px;
  }
`;

export const SpeakerContent = styled.div`
  text-align: center;

  @media (max-width: 767px) {
    margin: 0 20px;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 50%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  margin-top: 30px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
