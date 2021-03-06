import React from "react";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import Banner from "../modules/Banner";

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
  overflow: scroll;

  @media only screen and (max-width: 1250px) {
    flex: 0.8;
    overflow: visible;
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

interface Props {
  children: React.ReactNode;
}

const Default: React.FC<Props> = ({ children }) => (
  <>
    <Head>
      <title>Luftio</title>
      <meta name="description" content="Luftio" />
    </Head>
    <Layout>
      <LeftSide>
        <Content>{children}</Content>
      </LeftSide>
      <Banner />
    </Layout>
  </>
);

export default Default;
