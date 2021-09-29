import React from "react";
import Head from "next/head";
import moment from "moment";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import FeedbackDetailBlock from "../modules/FeedbackDetailBlock";

import { useGetFeedbackByIdQuery } from "../../graphql";
import ShimmerBlock from "../modules/Shimmer/ShimmerBlock";

type FeedbackDetailProps = {
  id: string;
};

const FeedbackDetail: React.FC<FeedbackDetailProps> = (props) => {
  const { t } = useTranslation<string>();

  const query = useGetFeedbackByIdQuery({ variables: { id: props.id } });
  const feedback = query.data?.feedback;

  const formatDate = (date: any) => {
    const dateJs = new Date(date);
    return moment(dateJs).format("DD/MM/YYYY");
  };

  return (
    <>
      <Head>
        <title>{t("title_feedback_detail_page")}</title>
      </Head>
      <Heading dashboard>{t("detail_feedback_heading")}</Heading>
      {feedback == null ? (
        <ShimmerBlock feedback={true} />
      ) : (
        <FeedbackDetailBlock
          name={feedback?.name}
          date={formatDate(feedback?.date)}
          howFeel={feedback?.how_feel}
          howBreath={feedback?.breath}
          temperatureLevel={feedback?.temperature}
        />
      )}
    </>
  );
};

export default FeedbackDetail;
