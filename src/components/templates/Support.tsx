import React from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import ContentBlock from "../elements/ContentBlock";
import ContentBlockItem from "../modules/ContentBlockItem";

const Support: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_support_page")}</title>
      </Head>
      <Heading dashboard>{t("support_page_heading")}</Heading>
      <ContentBlock>
        <ContentBlockItem
          subheading={t("support_email_subheading")}
          buttonText={t("support_email_button_text")}
          text={t("support_email_text")}
          url="mailto: info@luftio.cz"
          link
        />
        <ContentBlockItem
          subheading={t("support_webpage_subheading")}
          buttonText={t("support_webpage_button_text")}
          text={t("support_webpage_text")}
          url={t("faq_url")}
          target="_blank"
          link
        />
      </ContentBlock>
    </>
  );
};

export default Support;
