import React from "react";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import ContentBlockItem from "../modules/ContentBlockItem";

const Div = styled.div`
  margin: 40px 0 0 5%;
  width: 100%;
`;

const Block = styled.div`
  background: #fff;
  width: 95%;
  border-radius: ${(props) => props.theme.border_radius_primary};
  box-shadow: ${(props) => props.theme.color_block_box_shadow};
  padding: 30px 0 40px;
`;

const Support: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_support_page")}</title>
        <meta name="description" content={t("description_support_page")} />
      </Head>
      <Div>
        <Heading dashboard>{t("support_page_heading")}</Heading>
        <Block>
          <ContentBlockItem
            subheading={t("support_chat_subheading")}
            buttonText={t("support_chat_button_text")}
            text={t("support_chat_text")}
            url=""
          />
          <ContentBlockItem
            subheading={t("support_email_subheading")}
            buttonText={t("support_email_button_text")}
            text={t("support_email_text")}
            url="mailto: info@luftio.cz"
          />
          <ContentBlockItem
            subheading={t("support_webpage_subheading")}
            buttonText={t("support_webpage_button_text")}
            text={t("support_webpage_text")}
            url={t("website")}
            target="_blank"
            link
          />
        </Block>
      </Div>
    </>
  );
};

export default Support;
