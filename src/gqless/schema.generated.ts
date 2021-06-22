/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export const scalarsEnumsHash: import("gqless").ScalarsEnumsHash = {
  ID: true,
  String: true,
  Float: true,
  Int: true,
  Boolean: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    devices: { __type: "[Device!]", __args: { id: "ID" } },
    deviceData: { __type: "DeviceData" },
    eventFromMeasureDetail: { __type: "EventFromMeasureDetail" },
    eventsFromMeasure: { __type: "[EventFromMeasureDetail!]", __args: { id: "ID" } },
    eventFromEmployeesDetail: { __type: "EventFromEmployeesDetail" },
    eventsFromEmployees: { __type: "[EventFromEmployeesDetail!]", __args: { id: "ID" } },
    eventsNotifications: { __type: "[Notification!]", __args: { id: "ID" } },
    suggestions: { __type: "[SuggestionDetail!]", __args: { id: "ID" } },
    suggestionDetail: { __type: "SuggestionDetail" },
    feedback: { __type: "[FeedbackDetail!]", __args: { id: "ID" } },
    feedbackNotifications: { __type: "[Notification!]", __args: { id: "ID" } },
    feedbackDetail: { __type: "FeedbackDetail" },
    notifications: { __type: "Notifications" },
    user: { __type: "User", __args: { id: "ID" } },
    manageUsers: { __type: "[User!]", __args: { id: "ID" } },
    manageDevices: { __type: "[Device!]", __args: { id: "ID" } },
    onboardingFormResult: { __type: "OnboardingFormResult" },
    analytics: { __type: "Analytics" },
  },
  mutation: {},
  subscription: {},
  Device: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    label: { __type: "String!" },
    title: { __type: "String!" },
    color: { __type: "String!" },
    data: { __type: "DeviceData!" },
  },
  DeviceData: {
    __typename: { __type: "String!" },
    title: { __type: "String!" },
    type: { __type: "String!" },
    actual_value: { __type: "Float!" },
    max_value: { __type: "Float!" },
    min_value: { __type: "Float!" },
    difference: { __type: "Float!" },
    color: { __type: "String!" },
  },
  Notifications: {
    __typename: { __type: "String!" },
    events: { __type: "Int!" },
    events_from_measure: { __type: "Int!" },
    events_from_employees: { __type: "Int!" },
    feedback: { __type: "Int!" },
    suggestions: { __type: "Int!" },
  },
  Notification: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    title: { __type: "String!" },
    date: { __type: "String!" },
  },
  Analytics: {
    __typename: { __type: "String!" },
    events_total: { __type: "Int!" },
    events_good_total: { __type: "Int!" },
    events_normal_total: { __type: "Int!" },
    events_bad_total: { __type: "Int!" },
    feedback_total: { __type: "Int!" },
  },
  EventFromMeasureDetail: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    title: { __type: "String!" },
    place: { __type: "String!" },
    date: { __type: "String!" },
    threat: { __type: "Int!" },
    is_unread: { __type: "Boolean!" },
    justification: { __type: "String!" },
  },
  EventFromEmployeesDetail: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    place: { __type: "String!" },
    date: { __type: "String!" },
    is_unread: { __type: "Boolean!" },
    threat: { __type: "Int!" },
    temperature: { __type: "Int!" },
    breath: { __type: "Int!" },
    how_feel: { __type: "String!" },
  },
  SuggestionDetail: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    title: { __type: "String!" },
    importance: { __type: "Int!" },
    date: { __type: "String!" },
    is_unread: { __type: "Boolean!" },
    description: { __type: "String!" },
    how_solve: { __type: "String!" },
    why_important: { __type: "String!" },
  },
  FeedbackDetail: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    total_score: { __type: "Int!" },
    date: { __type: "String!" },
    is_unread: { __type: "Boolean!" },
    temperature: { __type: "Int!" },
    breath: { __type: "Int!" },
    how_feel: { __type: "String!" },
  },
  User: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    first_name: { __type: "String!" },
    last_name: { __type: "String!" },
    full_name: { __type: "String!" },
    email: { __type: "String!" },
    role: { __type: "String!" },
    pending_invitation: { __type: "Boolean!" },
  },
  OnboardingFormResult: {
    __typename: { __type: "String!" },
    productivity: { __type: "Int!" },
    energy: { __type: "Int!" },
    feedback: { __type: "Int!" },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  devices: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Array<Device>>;
  deviceData?: Maybe<DeviceData>;
  eventFromMeasureDetail?: Maybe<EventFromMeasureDetail>;
  eventsFromMeasure: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Array<EventFromMeasureDetail>>;
  eventFromEmployeesDetail?: Maybe<EventFromEmployeesDetail>;
  eventsFromEmployees: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Array<EventFromEmployeesDetail>>;
  eventsNotifications: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Array<Notification>>;
  suggestions: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Array<SuggestionDetail>>;
  suggestionDetail?: Maybe<SuggestionDetail>;
  feedback: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Array<FeedbackDetail>>;
  feedbackNotifications: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Array<Notification>>;
  feedbackDetail?: Maybe<FeedbackDetail>;
  notifications?: Maybe<Notifications>;
  user: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<User>;
  manageUsers: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Array<User>>;
  manageDevices: (args?: { id?: Maybe<Scalars["ID"]> }) => Maybe<Array<Device>>;
  onboardingFormResult?: Maybe<OnboardingFormResult>;
  analytics?: Maybe<Analytics>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface Device {
  __typename: "Device" | undefined;
  id: ScalarsEnums["ID"];
  label: ScalarsEnums["String"];
  title: ScalarsEnums["String"];
  color: ScalarsEnums["String"];
  data: DeviceData;
}

export interface DeviceData {
  __typename: "DeviceData" | undefined;
  title: ScalarsEnums["String"];
  type: ScalarsEnums["String"];
  actual_value: ScalarsEnums["Float"];
  max_value: ScalarsEnums["Float"];
  min_value: ScalarsEnums["Float"];
  difference: ScalarsEnums["Float"];
  color: ScalarsEnums["String"];
}

export interface Notifications {
  __typename: "Notifications" | undefined;
  events: ScalarsEnums["Int"];
  events_from_measure: ScalarsEnums["Int"];
  events_from_employees: ScalarsEnums["Int"];
  feedback: ScalarsEnums["Int"];
  suggestions: ScalarsEnums["Int"];
}

export interface Notification {
  __typename: "Notification" | undefined;
  id: ScalarsEnums["ID"];
  title: ScalarsEnums["String"];
  date: ScalarsEnums["String"];
}

export interface Analytics {
  __typename: "Analytics" | undefined;
  events_total: ScalarsEnums["Int"];
  events_good_total: ScalarsEnums["Int"];
  events_normal_total: ScalarsEnums["Int"];
  events_bad_total: ScalarsEnums["Int"];
  feedback_total: ScalarsEnums["Int"];
}

export interface EventFromMeasureDetail {
  __typename: "EventFromMeasureDetail" | undefined;
  id: ScalarsEnums["ID"];
  title: ScalarsEnums["String"];
  place: ScalarsEnums["String"];
  date: ScalarsEnums["String"];
  threat: ScalarsEnums["Int"];
  is_unread: ScalarsEnums["Boolean"];
  justification: ScalarsEnums["String"];
}

export interface EventFromEmployeesDetail {
  __typename: "EventFromEmployeesDetail" | undefined;
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  place: ScalarsEnums["String"];
  date: ScalarsEnums["String"];
  is_unread: ScalarsEnums["Boolean"];
  threat: ScalarsEnums["Int"];
  temperature: ScalarsEnums["Int"];
  breath: ScalarsEnums["Int"];
  how_feel: ScalarsEnums["String"];
}

export interface SuggestionDetail {
  __typename: "SuggestionDetail" | undefined;
  id: ScalarsEnums["ID"];
  title: ScalarsEnums["String"];
  importance: ScalarsEnums["Int"];
  date: ScalarsEnums["String"];
  is_unread: ScalarsEnums["Boolean"];
  description: ScalarsEnums["String"];
  how_solve: ScalarsEnums["String"];
  why_important: ScalarsEnums["String"];
}

export interface FeedbackDetail {
  __typename: "FeedbackDetail" | undefined;
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  total_score: ScalarsEnums["Int"];
  date: ScalarsEnums["String"];
  is_unread: ScalarsEnums["Boolean"];
  temperature: ScalarsEnums["Int"];
  breath: ScalarsEnums["Int"];
  how_feel: ScalarsEnums["String"];
}

export interface User {
  __typename: "User" | undefined;
  id: ScalarsEnums["ID"];
  first_name: ScalarsEnums["String"];
  last_name: ScalarsEnums["String"];
  full_name: ScalarsEnums["String"];
  email: ScalarsEnums["String"];
  role: ScalarsEnums["String"];
  pending_invitation: ScalarsEnums["Boolean"];
}

export interface OnboardingFormResult {
  __typename: "OnboardingFormResult" | undefined;
  productivity: ScalarsEnums["Int"];
  energy: ScalarsEnums["Int"];
  feedback: ScalarsEnums["Int"];
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Device: Device;
  DeviceData: DeviceData;
  Notifications: Notifications;
  Notification: Notification;
  Analytics: Analytics;
  EventFromMeasureDetail: EventFromMeasureDetail;
  EventFromEmployeesDetail: EventFromEmployeesDetail;
  SuggestionDetail: SuggestionDetail;
  FeedbackDetail: FeedbackDetail;
  User: User;
  OnboardingFormResult: OnboardingFormResult;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "Device"
  | "DeviceData"
  | "Notifications"
  | "Notification"
  | "Analytics"
  | "EventFromMeasureDetail"
  | "EventFromEmployeesDetail"
  | "SuggestionDetail"
  | "FeedbackDetail"
  | "User"
  | "OnboardingFormResult";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
