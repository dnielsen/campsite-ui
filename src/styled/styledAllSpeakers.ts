import styled from "styled-components";

export const StyledSpeakerImg = styled.img`
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.06);
  margin-bottom: 1em;
  height: 200px;
`;

export const StyledSpeakerLi = styled.li`
  flex: 1;
  flex-basis: 30%;
  display: flex;
  justify-content: center;
`;

export const StyledSpeakerUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
`;

export const StyledSpeakerInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > * {
    margin: 0 0 3em;
  }
`;

export const StyledHeadline = styled.h6`
  font-size: 0.9em;
  color: #474747;
`;

export const StyledSpeakerName = styled.h3`
  margin-bottom: 0.5em;
`;
