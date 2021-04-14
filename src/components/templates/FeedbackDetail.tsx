import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import FeedbackDetailBlock from "../modules/FeedbackDetailBlock";

const SuggestionsDetail: React.FC = () => {
  const { t } = useTranslation<string>();

  return (
    <>
      <Head>
        <title>{t("title_feedback_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_feedback_heading")}</Heading>
      <FeedbackDetailBlock />
    </>
  );
};

export default SuggestionsDetail;
