import React from "react";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import BasicText from "../../elements/BasicText";
import SelectBlock from "../../elements/SelectBlock";

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

interface OnboardingFormResultRowProps {
  title: string;
  selectedItem: number | undefined;
  setYes?: () => void;
  setMaybe?: () => void;
  setNo?: () => void;
}

const OnboardingFormResultRow: React.FC<OnboardingFormResultRowProps> = ({
  title,
  selectedItem,
  setYes,
  setMaybe,
  setNo,
}) => {
  const { t } = useTranslation<string>();

  return (
    <Row>
      <BasicText onboardingItemResult>{title}</BasicText>
      <Blocks>
        <SelectBlock
          icon="smile"
          text={t("yes_answer")}
          color={selectedItem === 1 ? "#4bb543" : "#838C97"}
          colorBorder={selectedItem === 1 ? "#4bb543" : "#e1e6ea"}
          onClick={setYes}
        />
        <SelectBlock
          icon="meh"
          text={t("unknown_answer")}
          color={selectedItem === 2 ? "#000" : "#838C97"}
          colorBorder={selectedItem === 2 ? "#000" : "#e1e6ea"}
          onClick={setMaybe}
        />
        <SelectBlock
          icon="frown"
          text={t("no_answer")}
          color={selectedItem === 3 ? "#de4733" : "#838C97"}
          colorBorder={selectedItem === 3 ? "#de4733" : "#e1e6ea"}
          onClick={setNo}
        />
      </Blocks>
    </Row>
  );
};

export default OnboardingFormResultRow;
