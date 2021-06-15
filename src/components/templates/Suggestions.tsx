import React, { Suspense } from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import { useQuery } from "../../gqless/";
import Heading from "../elements/Heading";
import MessageCard from "../modules/MessageCard";
import EmptyState from "../modules/EmptyState";
import Loader from "../elements/Loader";

const Suggestions: React.FC = () => {
  const { t } = useTranslation();

  const query = useQuery();
  const suggestions = query.suggestions;

  return (
    <>
      <Head>
        <title>{t("title_suggestions_page")}</title>
      </Head>
      <Heading dashboard>{t("suggestions_page_heading")}</Heading>
      {query.$state.isLoading ? (
        <Loader />
      ) : suggestions == null || suggestions.length == 0 ? (
        <EmptyState message={t("suggestions_page_empty_state")} />
      ) : (
        suggestions.map((suggestion) => (
          <MessageCard
            suggestion
            high
            name={suggestion.title}
            procents={0}
            date="14/3/2021"
            href="/suggestions/detail"
          />
        ))
      )}
      {/*<MessageCard suggestion low name="Vypínejte klimatizace kolem oběda" procents={0} date="13/3/2021" href="" />
      <MessageCard suggestion medium name="Otevírejte okna v zasedačce č. 1" procents={0} date="13/3/2021" href="" />
      <MessageCard suggestion low name="Servis klimatizace" procents={0} date="13/3/2021" href="" /> */}
    </>
  );
};

export default Suggestions;
