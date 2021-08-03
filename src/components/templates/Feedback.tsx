import React from "react";
import Head from "next/head";
import styled from "styled-components";
import moment from "moment";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import EmptyState from "../modules/EmptyState";
import Loader from "../elements/Loader";
import MessageCard from "../modules/MessageCard";
import Filter from "../elements/Filter";

import { useQuery } from "../../gqless";

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

const Feedback: React.FC = () => {
  const { t } = useTranslation<string>();

  const query = useQuery();
  const feedbacks = query.feedbacks;

  const formatDate = (date: any) => {
    const dateJs = new Date(date);
    return moment(dateJs).format("DD/MM/YYYY");
  };

  return (
    <>
      <Head>
        <title>{t("title_feedback_page")}</title>
      </Head>
      <HeadingDiv>
        <Heading dashboard>{t("feedback_page_heading")}</Heading>
        <Filter
          filterOptions={[
            { value: "latest", label: t("filter_latest") },
            { value: "oldest", label: t("filter_oldest") },
            { value: "best", label: t("filter_best") },
            { value: "worst", label: t("filter_worst") },
          ]}
        />
      </HeadingDiv>
      {query.$state.isLoading ? (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      ) : feedbacks == null || feedbacks.length == 0 ? (
        <EmptyState message={t("feedback_page_empty_state")} />
      ) : (
        feedbacks.map((feedback) => {
          [feedback.id, feedback.name, feedback.total_score, feedback.date, feedback.is_unread];
          if (
            feedback == null ||
            feedback.id == null ||
            feedback.name == null ||
            feedback.total_score == null ||
            feedback.date == null ||
            feedback.is_unread == null
          )
            return null;
          return (
            <MessageCard
              key={feedback.id}
              name={feedback.name}
              procents={feedback.total_score}
              date={formatDate(feedback.date)}
              href={"/feedback/" + feedback.id}
              unread={feedback.is_unread}
            />
          );
        })
      )}
    </>
  );
};

export default Feedback;
