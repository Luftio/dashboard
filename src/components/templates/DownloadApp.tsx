import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Header from "../modules/Header";
import ThingsboardService from "../../services/ThingsboardService";

const Badges = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 390px) {
    flex-direction: column;
    align-items: flex-start;
  }

  a {
    margin-right: 40px;
    position: relative;
    top: 2px;

    @media only screen and (max-width: 390px) {
      margin-bottom: 15px;
    }
  }
`;

const DownloadApp: React.FC = () => {
  const { t } = useTranslation();

  if (typeof window === "undefined") {
    return null;
  }

  const userAgent = navigator.userAgent || navigator.vendor;

  window.location.href = "luftioapp://loginWithToken/" + ThingsboardService.getInstance().getToken();

  setTimeout(() => {
    if (document.visibilityState != "visible") return;
    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.luftio.app";
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = "https://apps.apple.com/us/app/luftio/id1551174582";
    }
  }, 1000);

  return (
    <>
      <Head>
        <title>{t("title_download_app")}</title>
        <meta name="apple-itunes-app" content="app-id=1551174582" />
      </Head>
      <Header heading={t("download_heading")} subheading={t("download_subheading")} />
      <Badges>
        <a href="https://apps.apple.com/us/app/luftio/id1551174582">
          <Image src="/static/app-store-badge.svg" alt="App store badge" width={176} height={52} />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.luftio.app">
          <Image src="/static/google-play-badge.svg" alt="Google play badge" width={176} height={52} />
        </a>
      </Badges>
    </>
  );
};

export default DownloadApp;
