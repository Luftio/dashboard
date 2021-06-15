import React, { useState } from "react";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import BasicText from "../../elements/BasicText";
import SelectBlock from "../../elements/SelectBlock";

import { useQuery } from "../../../gqless";
import OnboardingFormResultRow from "./OnboardingFormResultRow";

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media only screen and (max-width: 1340px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -20px;
`;

const OnboardingFormResult: React.FC = () => {
  const { t } = useTranslation<string>();

  const query = useQuery();

  return (
    <>
      <OnboardingFormResultRow
        title={t("productivity_question")}
        selectedItem={query.onboardFormResult?.productivity}
      />
      <OnboardingFormResultRow title={t("energy_question")} selectedItem={query.onboardFormResult?.energy} />
      <OnboardingFormResultRow title={t("feedback_question")} selectedItem={query.onboardFormResult?.feedback} />
    </>
  );
};

export default OnboardingFormResult;
