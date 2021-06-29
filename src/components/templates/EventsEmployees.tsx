import React from "react";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import Filter from "../elements/Filter";
import EventsNav from "../modules/events/EventsNav";
import EventsCard from "../modules/events/EventsCard";
import EmptyState from "../modules/EmptyState";

const HeadingDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EventsEmployees: React.FC = () => {
  const { t } = useTranslation();

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
      <EventsNav />
      <EmptyState message={t("events_page_employees_empty_state")} />
    </>
  );
};

export default EventsEmployees;
