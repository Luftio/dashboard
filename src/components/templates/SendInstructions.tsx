import React from "react";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Header from "../modules/Header";
import EmailClients from "../modules/EmailClients";

const SendInstructions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header
        heading={t("instructions_heading")}
        subheading={t("instructions_subheading")}
      />
      <EmailClients />
    </>
  );
};

export default SendInstructions;
