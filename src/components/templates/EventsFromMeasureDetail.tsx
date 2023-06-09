import React from "react";
import Head from "next/head";
import moment from "moment";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import EventsDetailBlock from "../modules/events/EventsDetailBlock";
import ShimmerBlock from "../modules/Shimmer/ShimmerBlock";

import { useGetEventFromMeasureByIdQuery } from "../../graphql";

type EventsFromMeasureDetailProps = {
  id: string;
};

const EventsFromMeasureDetail: React.FC<EventsFromMeasureDetailProps> = (props) => {
  const { t } = useTranslation<string>();

  const query = useGetEventFromMeasureByIdQuery({ variables: { id: props.id } });
  const event = query.data?.event_from_measure;

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
      {event == null ? (
        <ShimmerBlock event={true} />
      ) : (
        <EventsDetailBlock
          title={event?.title}
          date={formatDate(event?.date)}
          iconName={event?.icon_name}
          place={event?.place}
          threat={event?.threat}
          justification={event?.justification}
        />
      )}
    </>
  );
};

export default EventsFromMeasureDetail;
