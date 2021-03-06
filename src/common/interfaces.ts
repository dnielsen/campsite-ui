import * as Yup from "yup";

export interface Event {
  id: string;
  name: string;
  description: string;
  startDate: string;
  registrationUrl: string;
  endDate: string;
  photo: string;
  organizerName: string;
  // We might add null address support later - that is, when an event takes place online
  // instead of in-person.
  address: string;
  sessions?: Session[];
  speakers?: SpeakerPreview[];
}

export interface Speaker extends SpeakerPreview {
  sessions?: Session[];
}

export interface SpeakerPreview {
  id: string;
  name: string;
  photo: string;
  headline: string;
  bio: string;
}

export interface Session extends SessionPreview {
  speakers: SpeakerPreview[];
  eventId: string;
  event: Event;
  comments?: Comment[];
}

export interface SessionPreview {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  videoUrl: string;
}

export interface BaseEventInput {
  name: string;
  description: string;
  photo: string;
  organizerName: string;
  address: string;
}

export interface FormEventInput extends BaseEventInput {
  startDate: string;
  endDate: string;
}

export interface FetchEventInput extends BaseEventInput {
  startDate: Date;
  endDate: Date;
}

export interface BaseSessionInput {
  name: string;
  description: string;
  videoUrl: string;
  speakerIds: string[];
  eventId: string;
}

export interface FetchSessionInput extends BaseSessionInput {
  startDate: Date;
  endDate: Date;
}

export interface FormSessionInput extends BaseSessionInput {
  startDate: string;
  endDate: string;
}

export interface FormSpeakerInput {
  name: string;
  bio: string;
  photo: string;
  headline: string;
}

export interface Option {
  label: string;
  value: string;
}

export interface FormProps<T> {
  onSubmit: (input: T) => void;
  initialValues: T;
  validationSchema: Yup.ObjectSchema;
  enableReinitialize?: boolean;
}

export interface Upload {
  url: string;
}

export interface FormSignInInput {
  email: string;
  password: string;
}

export interface PaginatedDataBase {
  endCursor: string | null;
}

export interface FullSessionParams {
  eventId: string;
  sessionId: string;
}

export interface Me {
  id: string;
  email: string;
}
