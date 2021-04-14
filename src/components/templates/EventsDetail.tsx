import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import EventsDetailBlock from "../modules/events/EventsDetailBlock";

const EventsDetail: React.FC = () => {
  const { t } = useTranslation<string>();

  return (
    <>
      <Head>
        <title>{t("title_events_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_events_heading")}</Heading>
      <EventsDetailBlock />
    </>
  );
};

export default EventsDetail;
