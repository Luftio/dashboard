import React from "react";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import Loader from "../elements/Loader";
import EventsNav from "../modules/events/EventsNav";
import EventsCard from "../modules/events/EventsCard";
import EmptyState from "../modules/EmptyState";

import { useQuery } from "../../gqless";

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

const EventsFromMeasure: React.FC = () => {
  const { t } = useTranslation();

  const query = useQuery();
  const eventsFromMeasure = query.eventsFromMeasure({ id: "1" });

  return (
    <>
      <Head>
        <title>{t("title_feedback_page")}</title>
      </Head>
      <Heading dashboard>{t("events_page_heading")}</Heading>
      <EventsNav />
      {query.$state.isLoading ? (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      ) : eventsFromMeasure == null || eventsFromMeasure.length == 0 ? (
        <EmptyState message={t("events_page_measure_empty_state")} />
      ) : (
        eventsFromMeasure.map((event) => (
          <EventsCard
            key={event.id}
            name={event.title}
            time={event.date}
            location={event.place}
            threat={event.threat}
            unread={event.is_unread}
            href="/events/from-measurement/detail"
          />
        ))
      )}
    </>
  );
};

export default EventsFromMeasure;
