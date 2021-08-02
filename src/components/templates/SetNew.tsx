import React from "react";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Header from "../modules/Header";
import SetNewPassword from "../modules/SetNewPasswordForm";

const SetNew: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header heading={t("set_new_password_heading")} subheading={t("set_new_password_subheading")} />
      <SetNewPassword />
    </>
  );
};

export default SetNew;
