// import styled component
import styled from "styled-components";

export const SpeakerBanner = styled.div`
  flex: 0 0 100%;
  max-width: 100%;

  img {
    height: auto;
    width: 100%;
    @media (min-width: 767px) {
      border-radius: 12px;
    }
  }
`;

export const SpeakerProfileWrapper = styled.div`
  background: #f5f5f5;
  padding: 1.2em;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-top: 1em;

  @media (max-width: 767px) {
    padding: 0;
    border: none;
    background: #ffffff;
  }
`;

export const SpeakerSessionWrapper = styled.div`
  flex: 1;
  position: relative;
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.18);

  @media (max-width: 767px) {
    margin: 15px 0px;
  }

  h2 {
    color: #414141;
  }

  p {
    font-size: 14px;
    color: #414141;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const SpeakerDataWrapper = styled.div`
  position: relative;
  @media (min-width: 991px) {
    top: -100px;
  }
`;

export const SpeakerInfoWrapper = styled.div`
  background: #fff;
  padding: 0 15px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.18);
  margin-right: 15px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  flex-basis: 210px;

  @media (max-width: 991px) {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SpeakerContent = styled.div`
  margin-top: 1em;
  text-align: center;

  @media (max-width: 991px) {
    text-align: center;
    margin: 1em 0;
  }
`;

export const SpeakerPhoto = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  img {
    width: 200px;
    object-fit: cover;
    border: 5px solid #ddd;
    border-radius: 50%;
    height: 200px;

    @media (max-width: 991px) {
      position: unset;
      margin-top: 1em;
    }
  }
`;

export const SpeakerName = styled.p`
  color: #2faad9;
  font-size: 1.5em;
  font-weight: 600;
  margin: 0 0 0.2em;
`;

export const SpeakerTitle = styled.p`
  color: #414141;
  font-size: 1em;
  font-weight: 500;
  margin: 0;
`;

export const SpeakerSocialMedia = styled.div`
  margin: 20px 0;

  a {
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 10px;
    color: #414141;
    font-weight: 500;
    margin-right: 15px;
  }

  i {
    font-size: 2em;
    padding: 0.2em 0.2em 0.2em 0.1em;
  }

  i.twitter {
    color: #34c4f2;
  }

  i.linkedin {
    color: #0274b3;
  }
`;

export const SpeakerBio = styled.div`
  color: rgba(26, 26, 26, 0.6);
  font-size: 1em;
`;

export const SpeakerSessionScheduleWrapper = styled.div`
  background: #f5f5f5;
  display: flex;
  padding: 0 1em;
  justify-content: space-between;
  color: #414141;
  border: 1px solid #e3e3e3;
  font-weight: 600;
  border-radius: 8px;

  p {
    font-size: 0.9em;
  }

  & > * {
    display: flex;
    align-self: center;
  }

  @media (max-width: 991px) {
    flex-direction: column;
  }

  div {
    padding: 1em;

    @media (max-width: 991px) {
      flex: 1;
    }
  }
`;
