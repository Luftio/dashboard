import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

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

const Div = styled.div`
  display: flex;
  flex: 0.4;
  justify-content: center;
  background-color: ${(props) => props.theme.color_brand};

  @media only screen and (max-width: 1250px) {
    flex: 0.2;
  }

  @media only screen and (max-width: 970px) {
    display: none;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1250px) {
    display: none;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Default: React.FC<Props> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_welcome")}</title>
        <meta name="description" content={t("description_welcome")} />
      </Head>
      <Layout>
        <LeftSide>
          <Content>{children}</Content>
        </LeftSide>
        <Div>
          <ImageDiv>
            <Image src="/static/smart-buildings.svg" alt="Smart buildings" width={404} height={542} />
          </ImageDiv>
        </Div>
      </Layout>
    </>
  );
};

export default Default;
