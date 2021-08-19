import React from "react";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Header from "../modules/Header";
import OnboardingForm from "../modules/forms/OnboardingForm";

const Onboarding: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header heading={t("onboarding_heading")} subheading={t("onboarding_subheading")} />
      <OnboardingForm />
    </>
  );
};

export default Onboarding;
