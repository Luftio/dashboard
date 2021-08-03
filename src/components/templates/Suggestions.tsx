import React from "react";
import Head from "next/head";
import styled from "styled-components";
import moment from "moment";

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
  const suggestions = query.suggestions;

  const formatDate = (date: any) => {
    const dateJs = new Date(date);
    return moment(dateJs).format("DD/MM/YYYY");
  };

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
        suggestions.map((suggestion) => {
          if (
            suggestion.title == null ||
            suggestion.importance == null ||
            suggestion.date == null ||
            suggestion.is_unread == null
          )
            return null;
          return (
            <MessageCard
              key={suggestion.id}
              suggestion
              level={suggestion.importance}
              name={suggestion.title}
              procents={0}
              date={formatDate(suggestion.date)}
              href={"/suggestions/" + suggestion.id}
              unread={suggestion.is_unread}
            />
          );
        })
      )}
    </>
  );
};

export default Suggestions;
