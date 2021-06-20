import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import EventsDetailBlock from "../modules/events/EventsDetailBlock";

import { useQuery } from "../../gqless";

const EventsFromMeasureDetail: React.FC = () => {
  const { t } = useTranslation<string>();

  const query = useQuery();
  const eventFromMeasureDetail = query.eventFromMeasureDetail;

  return (
    <>
      <Head>
        <title>{t("title_events_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_events_heading")}</Heading>
      <EventsDetailBlock
        title={eventFromMeasureDetail?.title}
        date={eventFromMeasureDetail?.date}
        place={eventFromMeasureDetail?.place}
        threat={eventFromMeasureDetail?.threat}
        justification={eventFromMeasureDetail?.justification}
      />
    </>
  );
};

export default EventsFromMeasureDetail;
