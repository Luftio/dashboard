import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import MessageCard from "../modules/MessageCard";
import EmptyState from "../modules/EmptyState";

const Suggestions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_suggestions_page")}</title>
      </Head>
      <Heading dashboard>{t("suggestions_page_heading")}</Heading>
      <MessageCard
        suggestion
        high
        name="Kupte zvlhčovač vzduchu"
        procents={0}
        date="14/3/2021"
        href="/suggestions/detail"
      />
      <MessageCard suggestion low name="Vypínejte klimatizace kolem oběda" procents={0} date="13/3/2021" href="" />
      <MessageCard suggestion medium name="Otevírejte okna v zasedačce č. 1" procents={0} date="13/3/2021" href="" />
      <MessageCard suggestion low name="Servis klimatizace" procents={0} date="13/3/2021" href="" />
      {/* <EmptyState message={t("suggestions_page_empty_state")} /> */}
    </>
  );
};

export default Suggestions;
