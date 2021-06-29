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

const EventsMeasurement: React.FC = () => {
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
      <EventsCard
        name="Stoupá hodnota CO2"
        time="12/3/2021 v 16.20"
        location="Kuchyně"
        value={25}
        unread
        href="/events/from-measurement/detail"
      />
      <EventsCard
        name="Teplota je přiliš vysoká"
        time="12/3/2021 v 14.38"
        location="Chodba"
        value={60}
        unread
        href=""
      />
      <EventsCard name="Kritický stav CO2" time="12/3/2021 v 14.01" location="Zasedačka" value={95} href="" />
      <EventsCard name="Zvýšená vlhkost" time="12/3/2021 v 13.24" location="Chodba" value={45} href="" />
      <EventsCard name="Mírně stoupá tlak" time="12/3/2021 v 12.55" location="Zasedačka" value={15} href="" />
      {/* <EmptyState message={t("events_page_measure_empty_state")} /> */}
    </>
  );
};

export default EventsMeasurement;
