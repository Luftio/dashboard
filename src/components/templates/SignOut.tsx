import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import Subheading from "../elements/Subheading";
import Button from "../elements/Button";
import Copyright from "../elements/Copyright";

const Div = styled.div`
  padding: 50px 0 0 70px;

  @media only screen and (max-width: 970px) {
    padding-left: 5%;
  }
`;

const SignOut: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("title_sign_me_back")}</title>
        <meta name="description" content={t("description_sign_me_back")} />
      </Head>
      <Div>
        <Image src="/static/logo_white.svg" alt="Luftio logo" width={120} height={45} />
        <Heading afterAction>{t("sign_out_heading")}</Heading>
        <Subheading afterAction>{t("sign_out_subheading")}</Subheading>
        <Link href="/">
          <Button signout>{t("sign_in_back_button")}</Button>
        </Link>
        <Copyright>
          Copyright © {new Date().getFullYear()} Luftio. {t("copyright")}
        </Copyright>
      </Div>
    </>
  );
};

export default SignOut;
