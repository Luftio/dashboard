import React from "react";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Header from "../modules/Header";
import GetStartedForm from "../modules/GetStartedForm";

export interface SignUpProps {
  id: string;
}

const SignUp: React.FC<SignUpProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <>
      <Header heading={t("sign_up_heading")} subheading={t("sign_up_subheading")} />
      <GetStartedForm id={id} />
    </>
  );
};

export default SignUp;
