import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import EventsDetailBlock from "../modules/events/EventsDetailBlock";

import { useQuery } from "../../gqless";

const EventsDetail: React.FC = () => {
  const { t } = useTranslation<string>();

  const query = useQuery();

  return (
    <>
      <Head>
        <title>{t("title_events_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_events_heading")}</Heading>
      <EventsDetailBlock
        title={query.eventFromMeasureDetail?.title}
        date={query.eventFromMeasureDetail?.date}
        place={query.eventFromMeasureDetail?.place}
        threat={query.eventFromMeasureDetail?.threat}
        justification={query.eventFromMeasureDetail?.justification}
      />
    </>
  );
};

export default EventsDetail;
