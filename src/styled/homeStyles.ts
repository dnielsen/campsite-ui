// import styled component
import styled from "styled-components";

export const StyledBannerSection = styled.div`
  padding-top: 5em;
  p {
    color: #2faad9;
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }

  h1 {
    font-size: 3em;
    color: #282828;
    font-weight: 700;
    line-height: 1;
    margin: 0 0 2em;
    overflow-wrap: break-word;
  }

  h3 {
    font-size: 32px;
    margin: 0;
    color: rgba(40, 40, 40, 0.73);
  }

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const StyledSelectSeatButton = styled.div`
  margin-top: 10em;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    text-align: center;
  }

  a {
    background: #2faad9;
    padding: 1em 2em;
    box-shadow: inset 0 0 20px 20px transparent;
    transition: box-shadow 0.2s ease;
    font-size: 20px;
    text-align: center;
    border-radius: 8px;
    color: #fff !important;
    text-decoration: none;
    font-weight: 600;
  }
`;

export const StyledLearnFromBestLogos = styled.div`
  p {
    color: rgba(40, 40, 40, 0.73);
    font-size: 14px;
    font-weight: 600;

    @media (max-width: 767px) {
      text-align: center;
    }
  }
`;

export const StyledBrandImages = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    justify-content: center;
  }

  img {
    display: block;
    margin: 12px 10px;
    opacity: 0.5;
    width: 150px;
  }
`;

export const StyledSectionFutureSummit = styled.div`
  margin-top: 100px;
  margin-right: 40px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const StyledContentLeftWrapper = styled.div`
  flex: 1;
  font-size: 1em;

  h3 {
    color: #282828;
    line-height: 42px;
    font-weight: 700;
    font-size: 32px;
    margin: 0;
  }

  p {
    padding-top: 24px;
    color: rgba(40, 40, 40, 0.73);
    line-height: 26px;
    font-weight: 500;
  }

  button {
    background: #2faad9;
    border: none;
    color: #fff;
    padding: 1em 2em;
    font-weight: 600;
    border-radius: 8px;
    font-size: 1.2em;
    outline: none;
  }
`;

export const StyledContentSubTitle = styled.p`
  color: #2faad9 !important;
  font-size: 20px;
  font-weight: 700 !important;
  margin: 0;
`;

export const StyledVideoContainer = styled.div`
  flex: 1;
`;

export const StyledSectionLargeText = styled.div`
  margin-top: 120px;
  margin-bottom: 120px;
  width: 100%;
  max-width: 964px;
  margin-right: auto;
  margin-left: auto;
`;

export const StyledTextBlack = styled.h3`
  font-size: 34px;
  color: #12141d;
  margin: 0;
  font-weight: 700;
`;

export const StyledTextBlue = styled.div`
  font-size: 34px;
  color: #2faad9;
  margin: 0;
  font-weight: 700;
`;

export const StyledTextGray = styled.div`
  font-size: 34px;
  color: rgba(40, 40, 40, 0.7);
  margin: 0;
  font-weight: 700;
`;

export const StyledSectionWhatYouWillGet = styled.div`
  margin-top: 30px;

  h3 {
    color: #282828;
    line-height: 42px;
    font-weight: 700;
    font-size: 32px;
    margin: 0;
  }
`;

export const StyledBoxes = styled.div`
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  p {
    font-size: 1em !important;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const StyledHundredPercentLive = styled.div`
  padding: 20px;
  justify-content: center;
  border-radius: 6px;
  background-color: rgba(18, 20, 29, 0.04);
  text-align: center;
  flex: 1;

  p {
    padding-left: 0;
    color: rgba(40, 40, 40, 0.73);
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
  }

  h4 {
    color: #282828;
    font-size: 24px;
  }
`;

export const StyledGoodVibes = styled.div`
  padding: 20px;
  justify-content: center;
  border-radius: 6px;
  text-align: center;
  flex: 1;

  p {
    padding-left: 0;
    color: rgba(40, 40, 40, 0.73);
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
  }

  h4 {
    color: #282828;
    font-size: 24px;
  }
`;

export const StyledNoBullshit = styled.div`
  padding: 20px;
  justify-content: center;
  border-radius: 6px;
  background-color: rgba(18, 20, 29, 0.04);
  text-align: center;
  flex: 1;

  p {
    padding-left: 0;
    color: rgba(40, 40, 40, 0.73);
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
  }

  h4 {
    color: #282828;
    font-size: 24px;
  }
`;

export const StyledCircleImageWrapper = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 48px;
  background: #2faad9;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSectionSpeakersContainer = styled.div`
  margin-top: 40px;

  h3 {
    color: #282828;
    line-height: 42px;
    font-weight: 700;
    font-size: 32px;
    margin: 0;
  }
`;

export const StyledSpeakersContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const StyledSpeaker = styled.div`
  padding: 20px;
  text-align: center;
  flex: 0 0 20%;

  img {
    border: 1px solid lightgray;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }

  h4 {
    font-size: 1.3em;
    line-height: 30px;
    color: #282828;
    margin: 0.2em;
  }
`;

export const StyledTextLead = styled.p`
  color: rgba(40, 40, 40, 0.73);
  font-size: 1.1em;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export const StyledSpeakerSocialMedia = styled.div`
  margin-top: 1em;

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

    // We need 0.1em so that the icons aren't slightly shifted to the left.
    padding: 0.2em 0.2em 0.2em 0.1em;
  }

  i.twitter {
    color: #34c4f2;
  }

  i.linkedin {
    color: #0274b3;
  }
`;

export const StyledSectionAgenda = styled.div`
  margin-top: 70px;
  text-align: center;
  margin-bottom: 70px;

  h1 {
    color: #282828;
    font-size: 40px;
  }
`;

export const StyledTabsWrapper = styled.div`
  margin: 0 auto;
  max-width: 991px;
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul li {
    background: #2faad9;
    color: #fff;
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.1em;
    outline: none;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    cursor: pointer;
  }
`;

export const StyledTabContent = styled.div`
  background: #2faad9;
  text-align: left;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
`;

export const StyledPanelDiscussion = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
`;

export const StyledTopic = styled.div`
  font-weight: 500;
  width: 100%;
  font-size: 1.2em;
  a {
    color: white;
  }
`;

export const StyledPanelImages = styled.div`
  margin-top: 10px;
  img {
    width: 60px;
    height: 60px;
    border: 1px solid lightgray;

    margin-right: 0.5em;
    border-radius: 50%;
  }
`;

export const StyledTimeLimit = styled.div`
  font-weight: 500;
  align-self: flex-end;
`;

export const StyledSectionIsThisForMe = styled.div`
  h3 {
    color: #282828;
    line-height: 42px;
    font-weight: 700;
    font-size: 32px;
    margin: 0;
  }
`;

export const StyledFounderAndCeo = styled.div`
  flex: 1;
  padding: 0 1em;
  h4 {
    font-size: 1.2em;
    color: #282828;
  }

  p {
    color: rgba(40, 40, 40, 0.81);
    font-size: 1.1em;
    line-height: 26px;
  }
`;

export const StyledBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledBadge = styled.div`
  background: #282828;
  height: 32px;
  min-width: 32px;
  color: #fff;
  border-radius: 50px;
  padding: 2px 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-right: 10px;
`;

export const StyledContentIsThisForMe = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const StyledButtonSaveYourSeatNow = styled.div`
  text-align: center;
  button {
    background: #2faad9;
    border: none;
    color: #fff;
    font-size: 20px;
    padding: 20px 220px;
    border-radius: 8px;
    font-weight: 600;
    outline: none;

    @media (max-width: 767px) {
      padding: 20px;
    }
  }
`;

export const StyledAboutOrganizer = styled.div`
  flex: 1;
  padding: 0.5em;

  h3 {
    color: #282828;
    line-height: 42px;
    font-weight: 700;
    font-size: 32px;
    margin: 0;
  }

  p {
    color: rgba(40, 40, 40, 0.73);
    line-height: 26px;
    font-size: 1.2em;
  }
`;

export const StyledPartners = styled.div`
  text-align: center;

  h3 {
    color: #282828;
    line-height: 42px;
    font-weight: 700;
    font-size: 32px;
    margin: 0;
  }
`;

export const StyledFooter = styled.div`
  h3 {
    color: #2faad9;
  }

  i.instagram {
    color: #c13584;
    font-size: 20px;
    margin-right: 7px;
  }
`;

export const StyledFrequentlyQA = styled.div`
  text-align: center;

  h3 {
    color: #282828;
    line-height: 42px;
    font-weight: 700;
    font-size: 32px;
  }
`;

export const StyledQuestion = styled.div`
  background: #f7f7f7;
  padding: 12px 24px;
  color: #414141;
  text-align: left;
  border-radius: 12px;
`;

export const StyledAnswer = styled.div`
  color: rgba(40, 40, 40, 0.73);
  line-height: 26px;
  margin-top: 20px;
`;

export const StyledKeepInMindText = styled.p`
  font-weight: 600;
  font-style: italic;
  margin: 0;
`;

export const StyledOrganizerImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;

    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
  }
`;

export const StyledSectionAboutOrganizer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;
