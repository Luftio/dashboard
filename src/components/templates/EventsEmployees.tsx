import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import EventsNav from "../modules/EventsNav";
import EventsCard from "../modules/EventsCard";

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
      <EventsCard name="Michal Pečinka" time="12/3/2021 v 15.56" location="Zasedačka" value={60} unread />
      <EventsCard name="Alice Horáčková" time="12/3/2021 v 14.23" location="Kuchyně" value={20} />
      <EventsCard name="Aleš Zima" time="11/3/2021 v 13.51" location="Chodba" value={76} />
      <EventsCard name="Ondřej Lanč" time="11/3/2021 v 11.43" location="Zasedačka" value={50} />
      {/* <EmptyState message={t("feedback_page_empty_state")} /> */}
    </>
  );
};

export default EventsEmployees;
