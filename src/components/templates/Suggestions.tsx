import React, { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import moment from "moment";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import Loader from "../elements/Loader";
import MessageCard from "../modules/MessageCard";
import EmptyState from "../modules/EmptyState";
import Filter from "../elements/Filter";

import { useGetSuggestionsQuery } from "../../graphql";

import useSuggestionsFilterStore from "../../stores/suggestionsFilterStore";

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

const HeadingDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 30px;
    align-items: flex-start;
  }
`;

const Suggestions: React.FC = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<any>([]);

  const query = useGetSuggestionsQuery();
  const suggestions = query.data?.suggestions;

  const formatDate = (date: any) => {
    const dateJs = new Date(date);
    return moment(dateJs).format("DD/MM/YYYY");
  };

  const filter = useSuggestionsFilterStore((state) => state.filter);
  const setFilter = useSuggestionsFilterStore((state) => state.setFilter);

  useEffect(() => {
    const sortArray = (type: string | undefined) => {
      if (type === "high-importance") {
        //@ts-ignore
        const sorted = [...suggestions].sort((a, b) => b.importance - a.importance);
        setData(sorted);
      } else if (type === "low-importance") {
        //@ts-ignore
        const sorted = [...suggestions].sort((a, b) => a.importance - b.importance);
        setData(sorted);
      } else if (type === "latest") {
        //@ts-ignore
        const sorted = [...suggestions].sort((a, b) => new Date(b.date) - new Date(a.date));
        setData(sorted);
      } else if (type === "oldest") {
        //@ts-ignore
        const sorted = [...suggestions].sort((a, b) => new Date(a.date) - new Date(b.date));
        setData(sorted);
      }
    };

    sortArray(filter?.value);
  }, [filter]);

  return (
    <>
      <Head>
        <title>{t("title_suggestions_page")}</title>
      </Head>
      <HeadingDiv>
        <Heading dashboard>{t("suggestions_page_heading")}</Heading>
        <Filter
          filterOptions={[
            { value: "latest", label: t("filter_latest") },
            { value: "oldest", label: t("filter_oldest") },
            { value: "high-importance", label: t("filter_high_importance") },
            { value: "low-importance", label: t("filter_low_importance") },
          ]}
          onChange={(value) => setFilter(value)}
          filterValue={filter}
        />
      </HeadingDiv>
      {query.loading ? (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      ) : suggestions == null || suggestions.length == 0 ? (
        <EmptyState message={t("suggestions_page_empty_state")} />
      ) : (
        <div>
          {filter === null
            ? suggestions.map((suggestion: any) => {
                [suggestion.id, suggestion.title, suggestion.date, suggestion.importance, suggestion.is_unread];
                if (
                  suggestion.title == null ||
                  suggestion.importance == null ||
                  suggestion.date == null ||
                  suggestion.is_unread == null ||
                  suggestion.icon_name == null
                )
                  return null;
                return (
                  <MessageCard
                    key={suggestion.id}
                    suggestion
                    level={suggestion.importance}
                    name={suggestion.title}
                    iconName={suggestion.icon_name}
                    iconBgColor={
                      suggestion.icon_name === "box"
                        ? "#F65656"
                        : suggestion.icon_name === "shield"
                        ? "#3F74F9"
                        : "#FFDB63"
                    }
                    procents={0}
                    date={formatDate(suggestion.date)}
                    href={"/suggestions/" + suggestion.id}
                    unread={suggestion.is_unread}
                  />
                );
              })
            : data.map((suggestion: any) => {
                [suggestion.id, suggestion.title, suggestion.date, suggestion.importance, suggestion.is_unread];
                if (
                  suggestion.title == null ||
                  suggestion.importance == null ||
                  suggestion.date == null ||
                  suggestion.is_unread == null ||
                  suggestion.icon_name == null
                )
                  return null;
                return (
                  <MessageCard
                    key={suggestion.id}
                    suggestion
                    level={suggestion.importance}
                    name={suggestion.title}
                    iconName={suggestion.icon_name}
                    iconBgColor={
                      suggestion.icon_name === "box"
                        ? "#F65656"
                        : suggestion.icon_name === "shield"
                        ? "#3F74F9"
                        : "#FFDB63"
                    }
                    procents={0}
                    date={formatDate(suggestion.date)}
                    href={"/suggestions/" + suggestion.id}
                    unread={suggestion.is_unread}
                  />
                );
              })}
        </div>
      )}
    </>
  );
};

export default Suggestions;
