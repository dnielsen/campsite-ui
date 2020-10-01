import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 767px) {
    max-width: 1140px;
    padding: 0 3em;
    margin: 0 auto;
  }
  & > * {
    width: 100%;
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
`;

export const StyledH2 = styled.h2`
  text-align: center;
`;
