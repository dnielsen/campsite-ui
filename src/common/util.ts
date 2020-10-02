import moment from "moment-timezone";
import { Option, SpeakerPreview } from "./interfaces";

const TIMEZONE = "America/Los_Angeles";

function getTimezoneHourRangeString(startDate: string, endDate: string) {
  // for example: 12:55pm
  const startTime = moment(startDate).tz(TIMEZONE).format("h:mma");
  // For example: 12:55pm PDT
  const endTime = moment(endDate).tz(TIMEZONE).format("h:mma z");

  return `${startTime} - ${endTime}`;
}

function getHourRangeString(startDate: string, endDate: string) {
  // for example: 12:55pm
  const startTime = moment(startDate).tz(TIMEZONE).format("h:mma");
  const endTime = moment(endDate).tz(TIMEZONE).format("h:mma");

  return `${startTime} - ${endTime}`;
}

function getFullDateString(date: string) {
  return moment(date).tz(TIMEZONE).format("MM/DD/YYYY h:mma z");
}

function getUniqueElementsFromMultidimensionalArray(arr: any[]) {
  return [...new Set(arr.flat())];
}

function getUniqueSpeakers(speakers: SpeakerPreview[]) {
  return speakers.reduce((uniqueSpeakers, currSpeaker: SpeakerPreview) => {
    if (
      uniqueSpeakers
        .map((speaker: SpeakerPreview) => speaker.id)
        .includes(currSpeaker.id)
    ) {
      return uniqueSpeakers;
    } else {
      return uniqueSpeakers.concat(currSpeaker);
    }
  }, [] as SpeakerPreview[]);
}

// For example: `06/27/2020 5:06 PM`. We need this function
// because `react-datetime` library requires the date formatted this way.
function getDateFormValue(date: string | Date) {
  return moment(date).tz(TIMEZONE).format("MM/DD/yyyy hh:mm a");
}

function getDayDiff(date1: string, date2: string) {
  return Math.abs(
    moment(date1).tz(TIMEZONE).date() - moment(date2).tz(TIMEZONE).date(),
  );
}

// Example:
// - when event is single day long: `04:30am - 12:30pm Sep 29th 2020`
// - when several days long: `05:15am May 20th - 12:00pm May 23th 2020`
function getDateRangeString(startDate: string, endDate: string) {
  // Actually, if the event was at least a month long it wouldn't work properly,
  // but we assume such events don't take place.
  const isEventOneDayLong = getDayDiff(startDate, endDate) === 0;

  // Remove the month and day from the start time if the event is single day long
  // (starts and ends on the same day).
  // For example, when single day:
  // `04:30am - 12:30pm Sep 29th 2020`
  // When several days long:
  // `05:15am May 20th - 12:00pm May 23th 2020`
  const startTime = isEventOneDayLong
    ? moment(startDate).tz(TIMEZONE).format("hh:mma")
    : moment(startDate).tz(TIMEZONE).format("hh:mma MMM Do");

  const endTime = moment(endDate).tz(TIMEZONE).format("hh:mma MMM Do YYYY");
  return `${startTime} - ${endTime}`;
}

function getHourDate(date: string) {
  return moment(date).tz(TIMEZONE).format("hh:mma");
}

export default {
  getTimezoneHourRangeString,
  getHourRangeString,
  getFullDateString,
  getDayDiff,
  getHourDate,
  getUniqueElementsFromMultidimensionalArray,
  getDateRangeString,
  getUniqueSpeakers,
  getDateFormValue,
};
