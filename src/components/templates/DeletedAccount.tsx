import React from "react";
import Image from "next/image";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import Subheading from "../elements/Subheading";
import Copyright from "../elements/Copyright";

const Div = styled.div`
  padding: 50px 0 0 70px;

  @media only screen and (max-width: 970px) {
    padding-left: 5%;
  }
`;

const DeletedAccount: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_deleted_account")}</title>
        <meta name="description" content={t("description_deleted_account")} />
      </Head>
      <Div>
        <Image src="/static/logo_white.svg" alt="Luftio logo" width={120} height={45} />
        <Heading afterAction>{t("deleted_account_heading")}</Heading>
        <Subheading afterAction>{t("deleted_account_subheading")}</Subheading>
        <Copyright>
          Copyright © {new Date().getFullYear()} Luftio. {t("copyright")}
        </Copyright>
      </Div>
    </>
  );
};

export default DeletedAccount;
