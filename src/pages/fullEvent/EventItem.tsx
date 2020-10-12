import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Link } from "react-router-dom";
import util from "../../common/util";
import {
  StyledH4,
  StyledMobilePaddingWrapper,
} from "../../styled/styledCommon";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Session } from "../../common/interfaces";
import { StyledEventSessionSpeakerWrapper } from "../../styled/eventStyles";
import {
  StyledAboutOrganizer,
  StyledAnswer,
  StyledBadge,
  StyledBadges,
  StyledBannerSection,
  StyledBoxes,
  StyledBrandImages,
  StyledButtonSaveYourSeatNow,
  StyledCircleImageWrapper,
  StyledContentIsThisForMe,
  StyledContentLeftWrapper,
  StyledContentSubTitle,
  StyledFooter,
  StyledFounderAndCeo,
  StyledFrequentlyQA,
  StyledGoodVibes,
  StyledHundredPercentLive,
  StyledKeepInMindText,
  StyledLearnFromBestLogos,
  StyledNoBullshit,
  StyledOrganizerImage,
  StyledPanelDiscussion,
  StyledPanelImages,
  StyledPartners,
  StyledQuestion,
  StyledSectionAboutOrganizer,
  StyledSectionAgenda,
  StyledSectionFutureSummit,
  StyledSectionIsThisForMe,
  StyledSectionLargeText,
  StyledSectionSpeakersContainer,
  StyledSectionWhatYouWillGet,
  StyledSelectSeatButton,
  StyledSpeaker,
  StyledSpeakersContainer,
  StyledSpeakerSocialMedia,
  StyledTabContent,
  StyledTabsWrapper,
  StyledTextBlack,
  StyledTextBlue,
  StyledTextGray,
  StyledTextLead,
  StyledTimeLimit,
  StyledTopic,
  StyledVideoContainer,
} from "../../styled/homeStyles";

interface SessionDays {
  [key: number]: Session[];
}

function EventItem() {
  const { data: eventDetails, loading, error } = useSelector(
    (state: RootState) => state.event,
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;
  if (!eventDetails) return <div>something went wrong</div>;

  // TODO: clean it up/refactor
  const sessionDays: SessionDays = {};
  if (eventDetails.sessions) {
    // We could make it slightly more performant by utilizing the classic for loop
    // and just taking slices whenever day diff between points A and B is >= 1,
    // but we'll skip it for now.
    eventDetails.sessions.forEach((session) => {
      const dayNum = util.getDayDiff(session.startDate, eventDetails.startDate);

      sessionDays[dayNum] = sessionDays[dayNum]
        ? // When session on such day already exist, concat it to the existing array.
          [...sessionDays[dayNum], session]
        : // When undefined (this day num occurs for the first time),
          // create a new array with a session.
          [session];
    });
  }

  return (
    <div>
      <StyledBannerSection>
        <p>
          {util.getDateRangeString(
            eventDetails.startDate,
            eventDetails.endDate,
          )}
        </p>
        <h1>{eventDetails.name}</h1>
      </StyledBannerSection>
      <StyledSelectSeatButton>
        <a href={eventDetails.registrationUrl}>Save your seat!</a>
      </StyledSelectSeatButton>

      <StyledLearnFromBestLogos>
        <p>Learn from the best:</p>
        <StyledBrandImages>
          {/*For dev: generate 5 the exact same elements*/}
          {[...Array(5).keys()].map((i) => (
            <div key={i}>
              <img
                src={
                  "https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f354394d9a1463ff9f2f0ff_SmartRecruiters.png"
                }
                alt={"SmartRecruiters"}
              />
            </div>
          ))}
        </StyledBrandImages>
      </StyledLearnFromBestLogos>
      <StyledMobilePaddingWrapper>
        <StyledSectionFutureSummit>
          <StyledContentLeftWrapper>
            <StyledContentSubTitle>Remote Future Summit</StyledContentSubTitle>
            <h3>Not just another virtual conference.</h3>
            <p>
              We live in a time filled with seemingly hundreds of digital
              products and tools to solve issues for remote workers. That’s why
              we want Remote Future Summit 2020 to be an event to connect with
              each other, be sincere about struggles, and discuss our
              relationships with remote teams, decreased visibility, and
              well-being.
            </p>
            {/*temporary solution, there should be just an anchor tag but then the styling would change*/}
            <a href={eventDetails.registrationUrl}>
              <button>Register Now</button>
            </a>
          </StyledContentLeftWrapper>
          <StyledVideoContainer>
            <h1>Video Here</h1>
          </StyledVideoContainer>
        </StyledSectionFutureSummit>
        <StyledSectionLargeText>
          <StyledTextBlack>
            Over the past years different studies have always pointed to these
            struggles among remote workers:{" "}
          </StyledTextBlack>
          <StyledTextBlue>
            overworking, difficulties with building relationships, and with
            loneliness.
          </StyledTextBlue>
          <StyledTextGray>
            We will help you overcome these challenges.
          </StyledTextGray>
        </StyledSectionLargeText>
        <StyledSectionWhatYouWillGet>
          <StyledContentSubTitle>Remote Future Summit</StyledContentSubTitle>
          <h3>What you will get?</h3>
          <StyledBoxes>
            <StyledHundredPercentLive>
              <StyledCircleImageWrapper>
                <img
                  width="44"
                  src="https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f329fb1fd8a91959a5cd40b_smartphone-tablet.svg"
                  alt=""
                />
              </StyledCircleImageWrapper>
              <h4>100% live</h4>
              <p>
                Live-streamed and interactive sessions for two days in a row!
              </p>
            </StyledHundredPercentLive>
            <StyledGoodVibes>
              <StyledCircleImageWrapper>
                <img
                  width="44"
                  src="https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f329fb1fd8a9157e55cd435_icon-heart.svg"
                  alt=""
                />
              </StyledCircleImageWrapper>
              <h4>Good vibes only</h4>
              <p>Yoga and coffee breaks where we recharge our batteries</p>
            </StyledGoodVibes>
            <StyledNoBullshit>
              <StyledCircleImageWrapper>
                <img
                  width="44"
                  src="https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f329fb1fd8a9157ca5cd433_icon-x.svg"
                  alt=""
                />
              </StyledCircleImageWrapper>
              <h4>No bullsh*t</h4>
              <p>
                Industry experts sharing openly about their challenges &
                failures
              </p>
            </StyledNoBullshit>
          </StyledBoxes>
        </StyledSectionWhatYouWillGet>
        {eventDetails.speakers && (
          <StyledSectionSpeakersContainer>
            <StyledContentSubTitle>They will guide you</StyledContentSubTitle>
            <h3>Meet the Speakers</h3>
            <StyledSpeakersContainer>
              {eventDetails.speakers.map((speaker) => (
                <StyledSpeaker key={speaker.id}>
                  <Link to={`/speakers/${speaker.id}`}>
                    <img src={speaker.photo} alt={speaker.name} />
                  </Link>
                  <Link to={`/speakers/${speaker.id}`}>
                    <StyledH4>{speaker.name}</StyledH4>
                  </Link>
                  <StyledTextLead>{speaker.headline}</StyledTextLead>
                  <StyledSpeakerSocialMedia>
                    <a href={"https://twitter.com/elonmusk"}>
                      <i className="fa fa-twitter twitter" aria-hidden="true" />
                    </a>
                    <a href={"https://linkedin.com"}>
                      <i
                        className="fa fa-linkedin linkedin"
                        aria-hidden="true"
                      />
                    </a>
                  </StyledSpeakerSocialMedia>
                </StyledSpeaker>
              ))}
            </StyledSpeakersContainer>
          </StyledSectionSpeakersContainer>
        )}
        {eventDetails.sessions && (
          <StyledSectionAgenda>
            <h1>See The Agenda</h1>
            <StyledTabsWrapper>
              <Tabs>
                <TabList>
                  {Object.keys(sessionDays).map((dayNum) => (
                    <Tab key={dayNum}>Day {dayNum}</Tab>
                  ))}
                </TabList>
                <StyledTabContent>
                  {Object.entries(sessionDays).map(
                    ([dayNum, sortedSessions]) => (
                      <TabPanel key={dayNum}>
                        <div>
                          <h2>
                            DAY {dayNum} Opening -{" "}
                            {util.getHourDate(sortedSessions[0].startDate)}
                          </h2>
                        </div>
                        {sortedSessions.map((session: Session) => (
                          <StyledPanelDiscussion key={session.id}>
                            <StyledTopic>
                              <Link
                                to={`/events/${eventDetails.id}/sessions/${session.id}`}
                              >
                                {session.name}
                              </Link>
                              <StyledEventSessionSpeakerWrapper>
                                <StyledPanelImages>
                                  {session.speakers &&
                                    session.speakers.map((speaker) => (
                                      <Link
                                        key={speaker.id}
                                        to={`/speakers/${speaker.id}`}
                                      >
                                        <img
                                          key={speaker.id}
                                          src={speaker.photo}
                                          alt={speaker.name}
                                        />
                                      </Link>
                                    ))}
                                </StyledPanelImages>
                                <StyledTimeLimit>
                                  {util.getHourRangeString(
                                    session.startDate,
                                    session.endDate,
                                  )}
                                </StyledTimeLimit>
                              </StyledEventSessionSpeakerWrapper>
                            </StyledTopic>
                          </StyledPanelDiscussion>
                        ))}
                      </TabPanel>
                    ),
                  )}
                  <StyledKeepInMindText>
                    &quot;❗ All timings are displayed in 🕤 Pacific Time Zone
                    (PDT) 🕛 ❗&quot;{" "}
                  </StyledKeepInMindText>
                </StyledTabContent>
              </Tabs>
            </StyledTabsWrapper>
          </StyledSectionAgenda>
        )}
        <StyledSectionIsThisForMe>
          <StyledContentSubTitle>Is this for me?</StyledContentSubTitle>
          <h3>Remote Future Summit 2020 is made for</h3>
        </StyledSectionIsThisForMe>
        <StyledContentIsThisForMe>
          <StyledFounderAndCeo>
            <h4>Founders & CEOs of remote companies</h4>
            <StyledBadges>
              <StyledBadge>Day 1</StyledBadge>
              <StyledBadge>Day 2</StyledBadge>
            </StyledBadges>
            <p>
              Learn valuable insights and get answers on the reality of working
              remotely and leading virtual teams directly from invited leaders
              and seasoned executives.{" "}
            </p>
          </StyledFounderAndCeo>
          <StyledFounderAndCeo>
            <h4>Founders & CEOs of remote companies</h4>
            <StyledBadges>
              <StyledBadge>Day 1</StyledBadge>
              <StyledBadge>Day 2</StyledBadge>
            </StyledBadges>
            <p>
              Learn valuable insights and get answers on the reality of working
              remotely and leading virtual teams directly from invited leaders
              and seasoned executives.{" "}
            </p>
          </StyledFounderAndCeo>
          <StyledFounderAndCeo>
            <h4>Founders & CEOs of remote companies</h4>
            <StyledBadges>
              <StyledBadge>Day 1</StyledBadge>
              <StyledBadge>Day 2</StyledBadge>
            </StyledBadges>
            <p>
              Learn valuable insights and get answers on the reality of working
              remotely and leading virtual teams directly from invited leaders
              and seasoned executives.{" "}
            </p>
          </StyledFounderAndCeo>
        </StyledContentIsThisForMe>
        <StyledButtonSaveYourSeatNow>
          {/*Temporary solution, it should be an anchor tag instead of a button but then styles would change*/}
          <a href={eventDetails.registrationUrl}>
            <button>Save your seat now</button>
          </a>
        </StyledButtonSaveYourSeatNow>
        <StyledSectionAboutOrganizer>
          <StyledAboutOrganizer>
            <StyledContentSubTitle>About organizers</StyledContentSubTitle>
            <h3>We&apos;ve been in this since 2017&apos;</h3>
            <p>
              This will be the third edition of our virtual conference on remote
              work powered by Remote-how. In 2018 and 2019 we had over 8,000
              attendees from 105 countries, with 64 speakers including Asana,
              Hubspot, Forbes, and Doist. Our goal is to help you learn how to
              build, scale, and lead distributed teams of remote workers.
            </p>
          </StyledAboutOrganizer>
          <StyledOrganizerImage>
            {" "}
            <img
              src="https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f3a7e64ecda612e4c4ab82e_Jerome_Remote%20Future%20Summit.jpg"
              alt="speaker-image"
            />
          </StyledOrganizerImage>
        </StyledSectionAboutOrganizer>
        <StyledPartners>
          <h3>Partners</h3>
          <p> We will show some partner logos here</p>
        </StyledPartners>
        <StyledFrequentlyQA>
          <h3>Frequently asked questions</h3>
          <StyledQuestion>
            Where and when is Remote Future Summit 2020?
          </StyledQuestion>
          <StyledAnswer>
            Remote Future Summit 2020 is a virtual conference. It’s happening
            online from September 23-24, 2020. You can join it from anywhere,
            literally.{" "}
          </StyledAnswer>
        </StyledFrequentlyQA>
        <StyledFooter>
          <h3>Contact Us</h3>
          <p>support@campsite.org</p>
        </StyledFooter>
      </StyledMobilePaddingWrapper>
    </div>
  );
}

export default EventItem;
