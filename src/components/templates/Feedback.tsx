import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import MessageCard from "../modules/MessageCard";

const Feedback: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_feedback_page")}</title>
        <meta name="description" content={t("description_feedback_page")} />
      </Head>
      <Heading dashboard>{t("feedback_page_heading")}</Heading>
      <MessageCard name="Aleš Zima" procents={83} date="14/3/2021" />
      <MessageCard name="Michal Pečinka" procents={31} date="14/3/2021" />
      <MessageCard name="Jana Nová" procents={58} date="14/3/2021" />
      <MessageCard name="Ondřej Lanč" procents={92} date="13/3/2021" />
      <MessageCard name="Aneta Zelinková" procents={71} date="12/3/2021" />
      {/* <EmptyState message={t("feedback_page_empty_state")} /> */}
    </>
  );
};

export default Feedback;
