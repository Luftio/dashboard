import React from "react";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import Filter from "../elements/Filter";
import MessageCard from "../modules/MessageCard";

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
      <MessageCard name="Aleš Zima" procents={83} date="14/3/2021" href="/feedback/detail" />
      <MessageCard name="Michal Pečinka" procents={31} date="14/3/2021" href="" />
      <MessageCard name="Jana Nová" procents={58} date="14/3/2021" href="" />
      <MessageCard name="Ondřej Lanč" procents={92} date="13/3/2021" href="" />
      <MessageCard name="Aneta Zelinková" procents={71} date="12/3/2021" href="" />
      {/* <EmptyState message={t("feedback_page_empty_state")} /> */}
    </>
  );
};

export default Feedback;
