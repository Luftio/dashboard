import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import EventsNav from "../modules/events/EventsNav";
import EventsCard from "../modules/events/EventsCard";
import EmptyState from "../modules/EmptyState";

const EventsEmployees: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_feedback_page")}</title>
        <meta name="description" content={t("description_feedback_page")} />
      </Head>
      <Heading dashboard>{t("events_page_heading")}</Heading>
      <EventsNav />
      <EmptyState message={t("events_page_employees_empty_state")} />
    </>
  );
};

export default EventsEmployees;
