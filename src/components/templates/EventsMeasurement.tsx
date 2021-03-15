import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import EventsNav from "../modules/EventsNav";
import EventsCard from "../modules/EventsCard";

const EventsMeasurement: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_feedback_page")}</title>
        <meta name="description" content={t("description_feedback_page")} />
      </Head>
      <Heading dashboard>{t("events_page_heading")}</Heading>
      <EventsNav />
      <EventsCard name="Stoupá hodnota CO2" time="12/3/2021 v 16.20" location="Kuchyně" value={25} unread />
      <EventsCard name="Teplota je přiliš vysoká" time="12/3/2021 v 14.38" location="Chodba" value={60} unread />
      <EventsCard name="Kritický stav CO2" time="12/3/2021 v 14.01" location="Zasedačka" value={95} />
      <EventsCard name="Zvýšená vlhkost" time="12/3/2021 v 13.24" location="Chodba" value={45} />
      <EventsCard name="Mírně stoupá tlak" time="12/3/2021 v 12.55" location="Zasedačka" value={15} />
      {/* <EmptyState message={t("feedback_page_empty_state")} /> */}
    </>
  );
};

export default EventsMeasurement;
