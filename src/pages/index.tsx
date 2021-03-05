import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm";
import Banner from "../components/Banner";
import "../i18n";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

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
  height: 500px;

  @media only screen and (max-width: 970px) {
    padding: 0;
    width: 100%;
  }
`;

const LogIn: React.FC = () => {
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
            heading={t("sign_in_heading")}
            message={t("sign_in_message")}
          />
          <SignInForm />
        </Content>
      </LeftSide>
      <Banner />
    </Layout>
  );
};

export default LogIn;
