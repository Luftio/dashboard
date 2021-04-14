import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import SuggestionsDetailBlock from "../modules/SuggestionsDetailBlock";

const SuggestionsDetail: React.FC = () => {
  const { t } = useTranslation<string>();

  return (
    <>
      <Head>
        <title>{t("title_suggestion_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_suggestions_heading")}</Heading>
      <SuggestionsDetailBlock />
    </>
  );
};

export default SuggestionsDetail;
