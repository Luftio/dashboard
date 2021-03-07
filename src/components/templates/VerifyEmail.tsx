import React from "react";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Header from "../modules/Header";
import EmailClients from "../modules/EmailClients";

const VerifyEmail: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header
        heading={t("verification_heading")}
        subheading={t("verification_subheading")}
      />
      <EmailClients />
    </>
  );
};

export default VerifyEmail;
