import React from "react";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Header from "../modules/Header";
import SignInForm from "../modules/forms/SignInForm";

const SignIn: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header heading={t("sign_in_heading")} subheading={t("sign_in_subheading")} />
      <SignInForm />
    </>
  );
};

export default SignIn;
