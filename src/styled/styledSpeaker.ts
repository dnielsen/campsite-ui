import styled from "styled-components";

export const StyledSpeakerSessionDescription = styled.p`
  font-size: 1em !important;
  padding: 0 1em;
`;

export const StyledWatch = styled.p``;

export const StyledSpeakerSessionStartDate = styled.p``;

export const StyledSpeakerSessionName = styled.p`
  @media (min-width: 991px) {
    width: 65%;
  }
`;

export const StyledSpeakerBanner = styled.div`
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
