import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import FeedbackDetailBlock from "../modules/FeedbackDetailBlock";

import { useQuery } from "../../gqless/";

const SuggestionsDetail: React.FC = () => {
  const { t } = useTranslation<string>();

  const query = useQuery();
  const feedbackDetail = query.feedbackDetail;

  return (
    <>
      <Head>
        <title>{t("title_feedback_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_feedback_heading")}</Heading>
      <FeedbackDetailBlock
        name={feedbackDetail?.name}
        date={feedbackDetail?.date}
        howFeel={feedbackDetail?.how_feel}
        howBreath={feedbackDetail?.breath}
        temperatureLevel={feedbackDetail?.temperature}
      />
    </>
  );
};

export default SuggestionsDetail;
