import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import FeedbackDetailBlock from "../modules/FeedbackDetailBlock";

import { useQuery } from "../../gqless";

const EventsFromEmployeesDetail: React.FC = () => {
  const { t } = useTranslation<string>();

  const query = useQuery();
  const eventFromEmployeesDetail = query.eventFromEmployeesDetail;

  return (
    <>
      <Head>
        <title>{t("title_events_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_events_heading")}</Heading>
      <FeedbackDetailBlock
        event
        name={eventFromEmployeesDetail?.name}
        date={eventFromEmployeesDetail?.date}
        howFeel={eventFromEmployeesDetail?.how_feel}
        place={eventFromEmployeesDetail?.place}
        howBreath={eventFromEmployeesDetail?.breath}
        temperatureLevel={eventFromEmployeesDetail?.temperature}
      />
    </>
  );
};

export default EventsFromEmployeesDetail;
