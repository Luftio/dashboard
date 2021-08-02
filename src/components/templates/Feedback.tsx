import React from "react";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import EmptyState from "../modules/EmptyState";
import Loader from "../elements/Loader";
import MessageCard from "../modules/MessageCard";

import { useQuery } from "../../gqless";

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

const Feedback: React.FC = () => {
  const { t } = useTranslation<string>();

  const query = useQuery();
  const feedbacks = query.feedbacks;

  return (
    <>
      <Head>
        <title>{t("title_feedback_page")}</title>
      </Head>
      <Heading dashboard>{t("feedback_page_heading")}</Heading>
      {query.$state.isLoading ? (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      ) : feedbacks == null || feedbacks.length == 0 ? (
        <EmptyState message={t("feedback_page_empty_state")} />
      ) : (
        feedbacks.map((feedback) => {
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
              date={new Date(feedback.date).toLocaleString()}
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
