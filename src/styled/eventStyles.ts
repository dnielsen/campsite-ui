// import styled component
import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const EventWrapper = styled.div`
  margin: 10px 0;
`;

export const Event = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 30%;
  border: 1px solid #ccc;
  margin: 1em;
  -webkit-box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.06);

  @media (max-width: 767px) {
    width: 50%;
  }

  img {
    width: 100%;
    height: 375px;
    object-fit: cover;
  }
`;

export const EventContent = styled.div`
  height: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  i {
    width: 30px;
    font-size: 1.5em;
    margin: 0 auto;
    padding: 0 0.2em;
  }

  & > * {
    font-size: 1.1em;
    color: #777777;
    font-weight: 500;
  }
`;

export const EventHeading = styled.h1`
  color: #2faad9;
  font-size: 1.5em;
  font-weight: 600;
  margin: 0;
`;

export const EventDescription = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  color: #777777;
  font-weight: 500;
  padding-bottom: 20px;
`;

export const StyledAnchorButton = styled.a`
  color: white !important;
  display: flex;
  height: 2em;
  width: 60%;
  justify-content: center;
  align-items: center;
  background: #7cf;
  text-transform: uppercase;
  padding: 1em 0.5em;
  margin: 0 auto 0.3em;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  &:hover {
    text-decoration: none;
    background: #7bf;
  }
  -webkit-box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.06);
  -moz-box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.06);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.06);
`;
