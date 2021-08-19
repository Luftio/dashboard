import React from "react";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Header from "../modules/Header";
import RequestChangeForm from "../modules/forms/RequestChangeForm";

const SignIn: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header heading={t("request_change_heading")} subheading={t("request_change_subheading")} />
      <RequestChangeForm />
    </>
  );
};

export default SignIn;
