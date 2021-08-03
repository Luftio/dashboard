import React from "react";
import Head from "next/head";
import moment from "moment";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import SuggestionsDetailBlock from "../modules/SuggestionsDetailBlock";
import ShimmerBlock from "../modules/Shimmer/ShimmerBlock";

import { useQuery } from "../../gqless/";

type SuggestionsDetailProps = {
  id: string;
};

const SuggestionsDetail: React.FC<SuggestionsDetailProps> = (props) => {
  const { t } = useTranslation<string>();

  const query = useQuery();
  const suggestion = query.suggestion({ id: props.id });

  const formatDate = (date: any) => {
    const dateJs = new Date(date);
    return moment(dateJs).format("DD/MM/YYYY");
  };

  return (
    <>
      <Head>
        <title>{t("title_suggestion_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_suggestions_heading")}</Heading>
      {suggestion.title == null ||
      suggestion.importance == null ||
      suggestion.date == null ||
      suggestion.description == null ||
      suggestion.how_solve == null ||
      suggestion.why_important == null ||
      suggestion.is_unread == null ? (
        <ShimmerBlock suggestion={true} />
      ) : (
        <SuggestionsDetailBlock
          title={suggestion?.title}
          date={formatDate(suggestion?.date)}
          description={suggestion?.description}
          howSolve={suggestion?.how_solve}
          whyImportant={suggestion?.why_important}
          level={suggestion?.importance}
        />
      )}
    </>
  );
};

export default SuggestionsDetail;
