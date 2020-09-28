import React from "react";
import { EventDetails } from "../common/interfaces";
import useAPI from "../hooks/useAPI";
import util from "../common/util";
import { Link, useHistory, useParams } from "react-router-dom";
import { BASE_EVENT_API_URL } from "../common/constants";
import * as s from "../styled/homeStyles";
import * as g from "../styled/globalStyles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function FullEvent() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { data: eventDetails, loading, error } = useAPI<EventDetails>(
    `/events/${id}`,
  );

  if (loading) return <div>loading...</div>;
  if (error) return <div>something went wrong: {error.message}</div>;

  async function handleDelete() {
    // Send a request to delete the event.
    await fetch(`${BASE_EVENT_API_URL}/${id}`, { method: "DELETE" });
    // Redirect to the home page after deleting the speaker.
    history.push("/");
  }

  if (eventDetails.sessions) {
    const eventSpeakersWithDuplicates = eventDetails.sessions
      .map((session) => session.speakers)
      .flat();

    eventDetails.speakers = util.getUniqueSpeakers(eventSpeakersWithDuplicates);
  }

  return (
    <>
      <g.Container>
        <s.BannerSection>
          <p>
            {util.getHourRangeString(
              eventDetails.startDate,
              eventDetails.endDate,
            )}
          </p>
          <h1>{eventDetails.name}</h1>
        </s.BannerSection>
        <s.SelectSeatButton>
          <a href={eventDetails.registrationUrl}>Save your seat!</a>
        </s.SelectSeatButton>
        {eventDetails.speakers && (
          <s.LearnFromBestLogos>
            <p>Learn from the best:</p>
            <s.BrandImages>
              {eventDetails.speakers.map((speaker) => (
                <Link key={speaker.id} to={`/speakers/${speaker.id}`}>
                  <img
                    key={speaker.id}
                    src={speaker.photo}
                    alt={speaker.name}
                  />
                </Link>
              ))}
            </s.BrandImages>
          </s.LearnFromBestLogos>
        )}
        <s.SectionFutureSummit>
          <s.ContentLeftWrapper>
            <s.ContentSubTitle>Remote Future Summit</s.ContentSubTitle>
            <h3>Not just another virtual conference.</h3>
            <p>
              We live in a time filled with seemingly hundreds of digital
              products and tools to solve issues for remote workers. That’s why
              we want Remote Future Summit 2020 to be an event to connect with
              each other, be sincere about struggles, and discuss our
              relationships with remote teams, decreased visibility, and
              wellbeing.
            </p>
            {/*temporary solution, it should be an anchor tag instead of a button but then styles would change*/}
            <button onClick={() => history.push(eventDetails.registrationUrl)}>
              Register Now
            </button>
          </s.ContentLeftWrapper>
          <s.VideoWrapper>
            <h1>Video Here</h1>
          </s.VideoWrapper>
        </s.SectionFutureSummit>
        <s.SectionLargeText>
          <s.TextBlack>
            Over the past years different studies have always pointed to these
            struggles among remote workers:{" "}
          </s.TextBlack>
          <s.TextBlue>
            overworking, difficulties with building relationships, and with
            loneliness.
          </s.TextBlue>
          <s.TextGrey>We will help you overcome these challenges.</s.TextGrey>
        </s.SectionLargeText>
        <s.SectionWhatYouWillGet>
          <s.ContentSubTitle>Remote Future Summit</s.ContentSubTitle>
          <h3>What you will get?</h3>
          <s.Boxes>
            <s.HundredPercentLive>
              <s.CircleImageWrapper>
                <img
                  width="44"
                  src="https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f329fb1fd8a91959a5cd40b_smartphone-tablet.svg"
                />
              </s.CircleImageWrapper>
              <h4>100% live</h4>
              <p>
                Live-streamed and interactive sessions for two days in a row!
              </p>
            </s.HundredPercentLive>
            <s.GoodVibes>
              <s.CircleImageWrapper>
                <img
                  width="44"
                  src="https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f329fb1fd8a9157e55cd435_icon-heart.svg"
                />
              </s.CircleImageWrapper>
              <h4>Good vibes only</h4>
              <p>Yoga and coffee breaks where we recharge our batteries</p>
            </s.GoodVibes>
            <s.NoBullShit>
              <s.CircleImageWrapper>
                <img
                  width="44"
                  src="https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f329fb1fd8a9157ca5cd433_icon-x.svg"
                />
              </s.CircleImageWrapper>
              <h4>No bulsh*t</h4>
              <p>
                Industry experts sharing openly about their challenges &
                failures
              </p>
            </s.NoBullShit>
          </s.Boxes>
        </s.SectionWhatYouWillGet>
        {eventDetails.speakers && (
          <s.SectionSpeakersContainer>
            <s.ContentSubTitle>They will guide you</s.ContentSubTitle>
            <h3>Meet the Speakers</h3>
            <s.SpeakersWrapper>
              {eventDetails.speakers.map((speaker) => (
                <s.Speaker key={speaker.id}>
                  <img src={speaker.photo} alt={speaker.name} />
                  <h4>{speaker.name}</h4>
                  <s.TextLead>{speaker.headline}</s.TextLead>
                  <s.SpeakerSocialMedia>
                    <a href={"https://twitter.com/elonmusk"}>
                      <i className="fa fa-twitter twitter" aria-hidden="true" />
                    </a>
                    <a href={"https://linkedin.com"}>
                      <i
                        className="fa fa-linkedin linkedin"
                        aria-hidden="true"
                      />
                    </a>
                  </s.SpeakerSocialMedia>
                </s.Speaker>
              ))}
            </s.SpeakersWrapper>
          </s.SectionSpeakersContainer>
        )}
        <s.SectionAgenda>
          <h1>See The Agenda</h1>
          <s.TabsWrapper>
            <Tabs>
              <TabList>
                <Tab>Day 1</Tab>
              </TabList>
              <s.TabContent>
                <TabPanel>
                  <s.EventTitle>
                    <h3>Day 1</h3>
                  </s.EventTitle>
                  <s.EventTime>
                    <h2>DAY 1 Opening - 9:00 AM</h2>
                  </s.EventTime>
                  {eventDetails.sessions &&
                    eventDetails.sessions.map((session) => (
                      <s.PanelDiscussion key={session.id}>
                        <s.topic>
                          <Link to={`/sessions/${session.id}`}>
                            {session.name}
                          </Link>
                          <s.PanelImages>
                            {session.speakers &&
                              session.speakers.map((speaker) => (
                                <Link
                                  key={speaker.id}
                                  to={`/speakers/${session.id}`}
                                >
                                  <img
                                    key={speaker.id}
                                    src={speaker.photo}
                                    alt={speaker.name}
                                  />
                                </Link>
                              ))}
                          </s.PanelImages>
                        </s.topic>
                        <s.TimeLimit>
                          {util.getHourRangeString(
                            session.startDate,
                            session.endDate,
                          )}
                        </s.TimeLimit>
                      </s.PanelDiscussion>
                    ))}
                </TabPanel>
                <s.KeepInMindText>
                  &quot;❗ Keep in mind all session timings are displayed in 🕤
                  Pacific Time Zone (PDT) 🕛 ❗&quot;{" "}
                </s.KeepInMindText>
              </s.TabContent>
            </Tabs>
          </s.TabsWrapper>
        </s.SectionAgenda>
        <s.SectionIsThisForMe>
          <s.ContentSubTitle>Is this for me?</s.ContentSubTitle>
          <h3>Remote Future Summit 2020 is made for</h3>
        </s.SectionIsThisForMe>
        <s.ContentIsThisForMe>
          <s.FounderAndCeo>
            <h4>Founders & CEOs of remote companies</h4>
            <s.Badges>
              <s.Badge>Day 1</s.Badge>
              <s.Badge>Day 2</s.Badge>
            </s.Badges>
            <p>
              Learn valuable insights and get answers on the reality of working
              remotely and leading virtual teams directly from invited leaders
              and seasoned executives.{" "}
            </p>
          </s.FounderAndCeo>
          <s.FounderAndCeo>
            <h4>Founders & CEOs of remote companies</h4>
            <s.Badges>
              <s.Badge>Day 1</s.Badge>
              <s.Badge>Day 2</s.Badge>
            </s.Badges>
            <p>
              Learn valuable insights and get answers on the reality of working
              remotely and leading virtual teams directly from invited leaders
              and seasoned executives.{" "}
            </p>
          </s.FounderAndCeo>
          <s.FounderAndCeo>
            <h4>Founders & CEOs of remote companies</h4>
            <s.Badges>
              <s.Badge>Day 1</s.Badge>
              <s.Badge>Day 2</s.Badge>
            </s.Badges>
            <p>
              Learn valuable insights and get answers on the reality of working
              remotely and leading virtual teams directly from invited leaders
              and seasoned executives.{" "}
            </p>
          </s.FounderAndCeo>
        </s.ContentIsThisForMe>
        <s.ButtonSaveYourSeatNow>
          {/*Temporary solution, it should be an anchor tag instead of a button but then styles would change*/}
          <button onClick={() => history.push(eventDetails.registrationUrl)}>
            Save your seat now
          </button>
        </s.ButtonSaveYourSeatNow>
        <s.SectionAboutOrganizer>
          <s.AboutOrganizer>
            <s.ContentSubTitle>About organizers</s.ContentSubTitle>
            <h3>We&apos;ve been in this since 2017&apos;</h3>
            <p>
              This will be the third edition of our virtual conference on remote
              work powered by Remote-how. In 2018 and 2019 we had over 8,000
              attendees from 105 countries, with 64 speakers including Asana,
              Hubspot, Forbes, and Doist. Our goal is to help you learn how to
              build, scale, and lead distributed teams of remote workers.
            </p>
          </s.AboutOrganizer>
          <s.OrganizerImage>
            {" "}
            <img
              src="https://uploads-ssl.webflow.com/5f329fb0017255d9d0baddec/5f3a7e64ecda612e4c4ab82e_Jerome_Remote%20Future%20Summit.jpg"
              alt="speaker-image"
            />
          </s.OrganizerImage>
        </s.SectionAboutOrganizer>
        <s.Partners>
          <h3>Partners</h3>
          <p> We will show some partner logos here</p>
        </s.Partners>
        <s.FrequentlyQA>
          <h3>Frequently asked questions</h3>
          <s.Question>Where and when is Remote Future Summit 2020?</s.Question>
          <s.Answer>
            Remote Future Summit 2020 is a virtual conference. It’s happening
            online from September 23-24, 2020. You can join it from anywhere,
            literally.{" "}
          </s.Answer>
        </s.FrequentlyQA>
        <s.Footer>
          <h3>Contact Us</h3>
          <p>support@campsite.org</p>
          <s.PoweredBy>
            Powered by <a href={"https://campsite.com"}>Campsite</a>
            <div className="privacy-policy">
              <a href={"https://campsite.org/terms"}>Terms of Use</a>
              <a href={"https://campsite.org/privacy"}>Privacy Policy</a>
            </div>
          </s.PoweredBy>
        </s.Footer>
      </g.Container>
    </>
  );
}

export default FullEvent;
