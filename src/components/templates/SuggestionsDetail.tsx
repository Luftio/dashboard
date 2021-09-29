import React from "react";
import Head from "next/head";
import moment from "moment";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import SuggestionsDetailBlock from "../modules/SuggestionsDetailBlock";
import ShimmerBlock from "../modules/Shimmer/ShimmerBlock";

import { useGetSuggestionByIdQuery } from "../../graphql";

type SuggestionsDetailProps = {
  id: string;
};

const SuggestionsDetail: React.FC<SuggestionsDetailProps> = (props) => {
  const { t } = useTranslation<string>();

  const query = useGetSuggestionByIdQuery({ variables: { id: props.id } });
  const suggestion = query.data?.suggestion;

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
      {suggestion == null ? (
        <ShimmerBlock suggestion={true} />
      ) : (
        <SuggestionsDetailBlock
          title={suggestion?.title}
          date={formatDate(suggestion?.date)}
          description={suggestion?.description}
          iconBgColor={
            suggestion.icon_name === "box" ? "#F65656" : suggestion.icon_name === "shield" ? "#3F74F9" : "#FFDB63"
          }
          iconName={suggestion?.icon_name}
          howSolve={suggestion?.how_solve}
          whyImportant={suggestion?.why_important}
          level={suggestion?.importance}
        />
      )}
    </>
  );
};

export default SuggestionsDetail;
