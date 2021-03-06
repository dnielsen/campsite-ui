// import styled component
import styled from "styled-components";

export const StyledSessionContainer = styled.div`
  background: #f5f5f5;
  padding: 1em;
  margin-top: 2em;
  border-radius: 8px;
  border: 1px solid #ccc;

  @media (max-width: 767px) {
    padding: 0;
    border: none;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    display: block;
  }
`;

export const StyledSpeakerFlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 50%;
`;

export const StyledSessionListWrapper = styled.div`
  min-height: 100%;
  background: #fff;
  padding: 15px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.18);
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

export const StyledSpeakerContainer = styled.div``;

export const StyledSessionDetailWrapper = styled.div`
  flex: 1;
  position: relative;
  background: #fff;
  padding: 0.6em;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.18);

  @media (max-width: 991px) {
    margin: 15px 0;
    text-align: center;
  }

  h2 {
    color: #414141;
  }

  p {
    font-size: 1em;
    color: #414141;
  }
`;

export const StyledSpeakerPhoto = styled.div`
  border: 5px solid #fff;
  border-radius: 50%;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
`;

export const StyledSpeakerName = styled.p`
  color: #2faad9;
  font-size: 1.2em !important;
  font-weight: 600;
  margin: 5px 0;
`;

export const StyledSpeakerTitle = styled.p`
  color: #414141;
  font-size: 1em !important;
  font-weight: 500;
  margin: 5px 0;
`;

export const StyledSpeakerContent = styled.div`
  text-align: center;

  @media (max-width: 767px) {
    margin: 0 20px;
  }
`;

export const StyledVideoContainer = styled.div`
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
