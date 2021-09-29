import React from "react";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import OnboardingFormResultRow from "./OnboardingFormResultRow";

const OnboardingFormResult: React.FC = () => {
  const { t } = useTranslation<string>();

  // const query = useQuery(); TODO: use query
  const onboardFormResult = {
    productivity: 1,
    energy: 1,
    feedback: 1,
  };

  return (
    <>
      <OnboardingFormResultRow title={t("productivity_question")} selectedItem={onboardFormResult?.productivity} />
      <OnboardingFormResultRow title={t("energy_question")} selectedItem={onboardFormResult?.energy} />
      <OnboardingFormResultRow title={t("feedback_question")} selectedItem={onboardFormResult?.feedback} />
    </>
  );
};

export default OnboardingFormResult;
