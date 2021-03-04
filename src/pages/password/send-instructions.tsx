import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import "../../i18n";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import EmailButton from "../../components/EmailButton";

const Layout = styled.div`
  display: flex;
  height: 100vh;

  @media only screen and (max-width: 970px) {
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex: 0.6;
  justify-content: center;

  @media only screen and (max-width: 1250px) {
    flex: 0.8;
  }
`;

const Content = styled.div`
  padding-left: 10%;
  width: 775px;
  height: 600px;

  @media only screen and (max-width: 970px) {
    padding: 0;
    width: 100%;
  }
`;

const EmailButtons = styled.div`
  display: flex;

  @media only screen and (max-width: 760px) {
    display: block;
  }
`;

const SendInstructins: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t("title_welcome")}</title>
        <meta name="description" content={t("description_welcome")} />
      </Head>
      <LeftSide>
        <Content>
          <Header
            heading={t("instructions_heading")}
            message={t("instructions_message")}
          />
          <EmailButtons>
            <EmailButton
              text={t("open_gmail")}
              imageUrl="/static/gmail.svg"
              href="https://mail.google.com/"
            />
            <EmailButton
              text={t("open_outlook")}
              imageUrl="/static/outlook.svg"
              href="https://outlook.live.com/mail"
            />
            <EmailButton
              text={t("open_seznam")}
              imageUrl="/static/seznam.svg"
              href="https://email.seznam.cz/"
            />
          </EmailButtons>
        </Content>
      </LeftSide>
      <Banner />
    </Layout>
  );
};

export default SendInstructins;
