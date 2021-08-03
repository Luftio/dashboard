import React from "react";
import Head from "next/head";
import moment from "moment";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import EventsDetailBlock from "../modules/events/EventsDetailBlock";
import ShimmerBlock from "../modules/Shimmer/ShimmerBlock";

import { useQuery } from "../../gqless";

type EventsFromMeasureDetailProps = {
  id: string;
};

const EventsFromMeasureDetail: React.FC<EventsFromMeasureDetailProps> = (props) => {
  const { t } = useTranslation<string>();

  const query = useQuery();
  const event = query.event_from_measure({ id: props.id });

  const formatDate = (date: any) => {
    const dateJs = new Date(date);
    return moment(dateJs).format("DD/MM/YYYY") + t("date_at") + moment(dateJs).format("HH:mm");
  };

  return (
    <>
      <Head>
        <title>{t("title_events_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_events_heading")}</Heading>
      {event.title == null ||
      event.date == null ||
      event.place == null ||
      event.threat == null ||
      event.justification == null ? (
        <ShimmerBlock event={true} />
      ) : (
        <EventsDetailBlock
          title={event?.title}
          date={formatDate(event?.date)}
          place={event?.place}
          threat={event?.threat}
          justification={event?.justification}
        />
      )}
    </>
  );
};

export default EventsFromMeasureDetail;
