import React from "react";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import Loader from "../elements/Loader";
import MessageCard from "../modules/MessageCard";
import EmptyState from "../modules/EmptyState";

import { useQuery } from "../../gqless/";

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

const Suggestions: React.FC = () => {
  const { t } = useTranslation();

  const query = useQuery();
  const suggestions = query.suggestions({ id: "1" });

  return (
    <>
      <Head>
        <title>{t("title_suggestions_page")}</title>
      </Head>
      <Heading dashboard>{t("suggestions_page_heading")}</Heading>
      {query.$state.isLoading ? (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      ) : suggestions == null || suggestions.length == 0 ? (
        <EmptyState message={t("suggestions_page_empty_state")} />
      ) : (
        suggestions.map((suggestion) => (
          <MessageCard
            key={suggestion.id}
            suggestion
            level={suggestion.importance}
            name={suggestion.title}
            procents={0}
            date={suggestion.date}
            href="/suggestions/detail"
            unread={suggestion.is_unread}
          />
        ))
      )}
    </>
  );
};

export default Suggestions;
