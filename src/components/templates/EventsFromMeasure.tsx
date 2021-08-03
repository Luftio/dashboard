import React from "react";
import Head from "next/head";
import styled from "styled-components";
import moment from "moment";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import Loader from "../elements/Loader";
import EventsNav from "../modules/events/EventsNav";
import EventsCard from "../modules/events/EventsCard";
import EmptyState from "../modules/EmptyState";
import Filter from "../elements/Filter";

import { useQuery } from "../../gqless";

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

const HeadingDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 30px;
    align-items: flex-start;
  }
`;

const EventsFromMeasure: React.FC = () => {
  const { t } = useTranslation();

  const query = useQuery();
  const eventsFromMeasure = query.events_from_measure;

  const formatDate = (date: any) => {
    const dateJs = new Date(date);
    return moment(dateJs).format("DD/MM/YYYY") + t("date_at") + moment(dateJs).format("HH:mm");
  };

  return (
    <>
      <Head>
        <title>{t("title_feedback_page")}</title>
      </Head>
      <HeadingDiv>
        <Heading dashboard>{t("events_page_heading")}</Heading>
        <Filter
          filterOptions={[
            { value: "latest", label: t("filter_latest") },
            { value: "oldest", label: t("filter_oldest") },
            { value: "high-threat", label: t("filter_high_threat") },
            { value: "low-threat", label: t("filter_low_threat") },
          ]}
        />
      </HeadingDiv>
      <EventsNav
        events_from_employees_unread_count={query.events_from_employees_unread_count}
        events_from_measure_unread_count={query.events_from_measure_unread_count}
      />
      {query.$state.isLoading ? (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      ) : eventsFromMeasure == null || eventsFromMeasure.length == 0 ? (
        <EmptyState message={t("events_page_measure_empty_state")} />
      ) : (
        eventsFromMeasure.map((event) => {
          if (event.title == null || event.date == null || event.place == null || event.threat == null) return null;
          return (
            <EventsCard
              key={event.id}
              name={event.title}
              time={formatDate(event.date)}
              location={event.place}
              threat={event.threat}
              unread={event.is_unread}
              href={"/events/from-measurement/" + event.id}
            />
          );
        })
      )}
    </>
  );
};

export default EventsFromMeasure;
