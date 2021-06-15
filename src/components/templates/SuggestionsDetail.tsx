import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import SuggestionsDetailBlock from "../modules/SuggestionsDetailBlock";

import { useQuery } from "../../gqless/";

const SuggestionsDetail: React.FC = () => {
  const { t } = useTranslation<string>();

  const query = useQuery();

  return (
    <>
      <Head>
        <title>{t("title_suggestion_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_suggestions_heading")}</Heading>
      <SuggestionsDetailBlock
        title={query.suggestionDetail?.title}
        date={query.suggestionDetail?.date}
        description={query.suggestionDetail?.description}
        howSolve={query.suggestionDetail?.how_solve}
        whyImportant={query.suggestionDetail?.why_important}
      />
    </>
  );
};

export default SuggestionsDetail;
