import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import EventsDetailBlock from "../modules/events/EventsDetailBlock";

import { useQuery } from "../../gqless";

type EventsFromMeasureDetailProps = {
  id: string;
};

const EventsFromMeasureDetail: React.FC<EventsFromMeasureDetailProps> = (props) => {
  const { t } = useTranslation<string>();

  const query = useQuery();
  const event = query.event_from_measure({ id: props.id });

  if (
    event.title == null ||
    event.date == null ||
    event.place == null ||
    event.threat == null ||
    event.justification == null
  ) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{t("title_events_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_events_heading")}</Heading>
      <EventsDetailBlock
        title={event?.title}
        date={new Date(event?.date).toLocaleString()}
        place={event?.place}
        threat={event?.threat}
        justification={event?.justification}
      />
    </>
  );
};

export default EventsFromMeasureDetail;
