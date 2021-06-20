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

const EventsFromEmployees: React.FC = () => {
  const { t } = useTranslation();

  const query = useQuery();
  const eventsFromEmployee = query.eventsFromEmployees({ id: "1" });

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
      ) : eventsFromEmployee == null || eventsFromEmployee.length == 0 ? (
        <EmptyState message={t("events_page_employees_empty_state")} />
      ) : (
        eventsFromEmployee.map((event) => (
          <EventsCard
            key={event.id}
            name={event.name}
            time={event.date}
            location={event.place}
            threat={event.threat}
            unread={event.is_unread}
            href="/events/from-employees/detail"
          />
        ))
      )}
    </>
  );
};

export default EventsFromEmployees;
