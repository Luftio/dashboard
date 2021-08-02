import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import FeedbackDetailBlock from "../modules/FeedbackDetailBlock";

import { useQuery } from "../../gqless";

type EventsFromEmployeesDetailProps = {
  id: string;
};

const EventsFromEmployeesDetail: React.FC<EventsFromEmployeesDetailProps> = (props) => {
  const { t } = useTranslation<string>();

  const query = useQuery();
  const event = query.event_from_employee({ id: props.id });

  if (
    event.name == null ||
    event.date == null ||
    event.how_feel == null ||
    event.place == null ||
    event.breath == null ||
    event.temperature == null
  ) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{t("title_events_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_events_heading")}</Heading>
      <FeedbackDetailBlock
        event
        name={event?.name}
        date={new Date(event?.date).toLocaleString()}
        howFeel={event?.how_feel}
        place={event?.place}
        howBreath={event?.breath}
        temperatureLevel={event?.temperature}
      />
    </>
  );
};

export default EventsFromEmployeesDetail;
