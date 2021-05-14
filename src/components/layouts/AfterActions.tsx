import React from "react";
import Head from "next/head";
import styled, { css } from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

const Image = styled.div<{ delete?: boolean }>`
  height: 100%;
  width: 100%;
  background-image: url("/static/Mountains.png");
  background-position: center center;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;

  ${(props) =>
    props.delete &&
    css`
      background-image: url("/static/Forest.png");
      }
    `}
`;

interface DefaultProps {
  children: React.ReactNode;
  afterdelete?: boolean;
}

const Default: React.FC<DefaultProps> = ({ children, afterdelete }) => {
  const { t } = useTranslation<string>();

  return (
    <>
      <Head>
        <title>{t("title_sign_me_back")}</title>
        <meta name="description" content={t("description_sign_me_back")} />
      </Head>
      <Image delete={afterdelete}>{children}</Image>
    </>
  );
};

export default Default;
