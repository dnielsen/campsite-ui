import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Link } from "react-router-dom";
import util from "../../common/util";
import * as s from "../../styled/homeStyles";
import {
  StyledH4,
  StyledMobilePaddingWrapper,
} from "../../styled/styledCommon";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Session } from "../../common/interfaces";
import { StyledEventSessionSpeakerWrapper } from "../../styled/eventStyles";

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
      <s.StyledBannerSection>
        <p>
          {util.getDateRangeString(
            eventDetails.startDate,
            eventDetails.endDate,
          )}
        </p>
        <h1>{eventDetails.name}</h1>
      </s.StyledBannerSection>
      <s.StyledSelectSeatButton>
        <a href={eventDetails.registrationUrl}>Save your seat!</a>
      </s.StyledSelectSeatButton>

      <s.StyledLearnFromBestLogos>
        <p>Learn from the best:</p>
        <s.StyledBrandImages>
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
        </s.StyledBrandImages>
      </s.StyledLearnFromBestLogos>
      <StyledMobilePaddingWrapper>
        <s.StyledSectionFutureSummit>
          <s.StyledContentLeftWrapper>
            <s.StyledContentSubTitle>
              Remote Future Summit
            </s.StyledContentSubTitle>
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
          </s.StyledContentLeftWrapper>
          <s.StyledVideoContainer>
            <h1>Video Here</h1>
          </s.StyledVideoContainer>
        </s.StyledSectionFutureSummit>
        <s.StyledSectionLargeText>
          <s.StyledTextBlack>
            Over the past years different studies have always pointed to these
            struggles among remote workers:{" "}
          </s.StyledTextBlack>
          <s.StyledTextBlue>
            overworking, difficulties with building relationships, and with
            loneliness.
          </s.StyledTextBlue>
          <s.StyledTextGray>
            We will help you overcome these challenges.
          </s.StyledTextGray>
        </s.StyledSectionLargeText>
        <s.StyledSectionWhatYouWillGet>
          <s.StyledContentSubTitle>
            Remote Future Summit
          </s.StyledContentSubTitle>
          <h3>What you will get?</h3>
          <s.StyledBoxes>
            <s.StyledHundredPercentLive>
              <s.StyledCircleImageWrapper>
                <img
                  width="44"
                  src="https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f329fb1fd8a91959a5cd40b_smartphone-tablet.svg"
                  alt=""
                />
              </s.StyledCircleImageWrapper>
              <h4>100% live</h4>
              <p>
                Live-streamed and interactive sessions for two days in a row!
              </p>
            </s.StyledHundredPercentLive>
            <s.StyledGoodVibes>
              <s.StyledCircleImageWrapper>
                <img
                  width="44"
                  src="https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f329fb1fd8a9157e55cd435_icon-heart.svg"
                  alt=""
                />
              </s.StyledCircleImageWrapper>
              <h4>Good vibes only</h4>
              <p>Yoga and coffee breaks where we recharge our batteries</p>
            </s.StyledGoodVibes>
            <s.StyledNoBullshit>
              <s.StyledCircleImageWrapper>
                <img
                  width="44"
                  src="https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f329fb1fd8a9157ca5cd433_icon-x.svg"
                  alt=""
                />
              </s.StyledCircleImageWrapper>
              <h4>No bullsh*t</h4>
              <p>
                Industry experts sharing openly about their challenges &
                failures
              </p>
            </s.StyledNoBullshit>
          </s.StyledBoxes>
        </s.StyledSectionWhatYouWillGet>
        {eventDetails.speakers && (
          <s.StyledSectionSpeakersContainer>
            <s.StyledContentSubTitle>
              They will guide you
            </s.StyledContentSubTitle>
            <h3>Meet the Speakers</h3>
            <s.StyledSpeakersContainer>
              {eventDetails.speakers.map((speaker) => (
                <s.StyledSpeaker key={speaker.id}>
                  <Link to={`/speakers/${speaker.id}`}>
                    <img src={speaker.photo} alt={speaker.name} />
                  </Link>
                  <Link to={`/speakers/${speaker.id}`}>
                    <StyledH4>{speaker.name}</StyledH4>
                  </Link>
                  <s.StyledTextLead>{speaker.headline}</s.StyledTextLead>
                  <s.StyledSpeakerSocialMedia>
                    <a href={"https://twitter.com/elonmusk"}>
                      <i className="fa fa-twitter twitter" aria-hidden="true" />
                    </a>
                    <a href={"https://linkedin.com"}>
                      <i
                        className="fa fa-linkedin linkedin"
                        aria-hidden="true"
                      />
                    </a>
                  </s.StyledSpeakerSocialMedia>
                </s.StyledSpeaker>
              ))}
            </s.StyledSpeakersContainer>
          </s.StyledSectionSpeakersContainer>
        )}
        {eventDetails.sessions && (
          <s.StyledSectionAgenda>
            <h1>See The Agenda</h1>
            <s.StyledTabsWrapper>
              <Tabs>
                <TabList>
                  {Object.keys(sessionDays).map((dayNum) => (
                    <Tab key={dayNum}>Day {dayNum}</Tab>
                  ))}
                </TabList>
                <s.StyledTabContent>
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
                          <s.StyledPanelDiscussion key={session.id}>
                            <s.StyledTopic>
                              <Link
                                to={`/events/${eventDetails.id}/sessions/${session.id}`}
                              >
                                {session.name}
                              </Link>
                              <StyledEventSessionSpeakerWrapper>
                                <s.StyledPanelImages>
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
                                </s.StyledPanelImages>
                                <s.StyledTimeLimit>
                                  {util.getHourRangeString(
                                    session.startDate,
                                    session.endDate,
                                  )}
                                </s.StyledTimeLimit>
                              </StyledEventSessionSpeakerWrapper>
                            </s.StyledTopic>
                          </s.StyledPanelDiscussion>
                        ))}
                      </TabPanel>
                    ),
                  )}
                  <s.StyledKeepInMindText>
                    &quot;❗ All timings are displayed in 🕤 Pacific Time Zone
                    (PDT) 🕛 ❗&quot;{" "}
                  </s.StyledKeepInMindText>
                </s.StyledTabContent>
              </Tabs>
            </s.StyledTabsWrapper>
          </s.StyledSectionAgenda>
        )}
        <s.StyledSectionIsThisForMe>
          <s.StyledContentSubTitle>Is this for me?</s.StyledContentSubTitle>
          <h3>Remote Future Summit 2020 is made for</h3>
        </s.StyledSectionIsThisForMe>
        <s.StyledContentIsThisForMe>
          <s.StyledFounderAndCeo>
            <h4>Founders & CEOs of remote companies</h4>
            <s.StyledBadges>
              <s.StyledBadge>Day 1</s.StyledBadge>
              <s.StyledBadge>Day 2</s.StyledBadge>
            </s.StyledBadges>
            <p>
              Learn valuable insights and get answers on the reality of working
              remotely and leading virtual teams directly from invited leaders
              and seasoned executives.{" "}
            </p>
          </s.StyledFounderAndCeo>
          <s.StyledFounderAndCeo>
            <h4>Founders & CEOs of remote companies</h4>
            <s.StyledBadges>
              <s.StyledBadge>Day 1</s.StyledBadge>
              <s.StyledBadge>Day 2</s.StyledBadge>
            </s.StyledBadges>
            <p>
              Learn valuable insights and get answers on the reality of working
              remotely and leading virtual teams directly from invited leaders
              and seasoned executives.{" "}
            </p>
          </s.StyledFounderAndCeo>
          <s.StyledFounderAndCeo>
            <h4>Founders & CEOs of remote companies</h4>
            <s.StyledBadges>
              <s.StyledBadge>Day 1</s.StyledBadge>
              <s.StyledBadge>Day 2</s.StyledBadge>
            </s.StyledBadges>
            <p>
              Learn valuable insights and get answers on the reality of working
              remotely and leading virtual teams directly from invited leaders
              and seasoned executives.{" "}
            </p>
          </s.StyledFounderAndCeo>
        </s.StyledContentIsThisForMe>
        <s.StyledButtonSaveYourSeatNow>
          {/*Temporary solution, it should be an anchor tag instead of a button but then styles would change*/}
          <a href={eventDetails.registrationUrl}>
            <button>Save your seat now</button>
          </a>
        </s.StyledButtonSaveYourSeatNow>
        <s.StyledSectionAboutOrganizer>
          <s.StyledAboutOrganizer>
            <s.StyledContentSubTitle>About organizers</s.StyledContentSubTitle>
            <h3>We&apos;ve been in this since 2017&apos;</h3>
            <p>
              This will be the third edition of our virtual conference on remote
              work powered by Remote-how. In 2018 and 2019 we had over 8,000
              attendees from 105 countries, with 64 speakers including Asana,
              Hubspot, Forbes, and Doist. Our goal is to help you learn how to
              build, scale, and lead distributed teams of remote workers.
            </p>
          </s.StyledAboutOrganizer>
          <s.StyledOrganizerImage>
            {" "}
            <img
              src="https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f3a7e64ecda612e4c4ab82e_Jerome_Remote%20Future%20Summit.jpg"
              alt="speaker-image"
            />
          </s.StyledOrganizerImage>
        </s.StyledSectionAboutOrganizer>
        <s.StyledPartners>
          <h3>Partners</h3>
          <p> We will show some partner logos here</p>
        </s.StyledPartners>
        <s.StyledFrequentlyQA>
          <h3>Frequently asked questions</h3>
          <s.StyledQuestion>
            Where and when is Remote Future Summit 2020?
          </s.StyledQuestion>
          <s.StyledAnswer>
            Remote Future Summit 2020 is a virtual conference. It’s happening
            online from September 23-24, 2020. You can join it from anywhere,
            literally.{" "}
          </s.StyledAnswer>
        </s.StyledFrequentlyQA>
        <s.StyledFooter>
          <h3>Contact Us</h3>
          <p>support@campsite.org</p>
        </s.StyledFooter>
      </StyledMobilePaddingWrapper>
    </div>
  );
}

export default EventItem;
