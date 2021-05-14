import React, { useState } from "react";
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

const OnboardingFormResult: React.FC = () => {
  const { t } = useTranslation<string>();

  const [productivity, setProductivity] = useState<string>("yes");
  const [energy, setEnergy] = useState<string>("maybe");
  const [feedback, setFeedback] = useState<string>("no");

  return (
    <>
      <Row>
        <BasicText onboardingItemResult>{t("productivity_question")}</BasicText>
        <Blocks>
          <SelectBlock
            icon="smile"
            text={t("yes_answer")}
            color={productivity === "yes" ? "#4bb543" : "#838C97"}
            colorBorder={productivity === "yes" ? "#4bb543" : "#e1e6ea"}
            onClick={() => setProductivity("yes")}
          />
          <SelectBlock
            icon="meh"
            text={t("unknown_answer")}
            color={productivity === "maybe" ? "#000" : "#838C97"}
            colorBorder={productivity === "maybe" ? "#000" : "#e1e6ea"}
            onClick={() => setProductivity("maybe")}
          />
          <SelectBlock
            icon="frown"
            text={t("no_answer")}
            color={productivity === "no" ? "#de4733" : "#838C97"}
            colorBorder={productivity === "no" ? "#de4733" : "#e1e6ea"}
            onClick={() => setProductivity("no")}
          />
        </Blocks>
      </Row>
      <Row>
        <BasicText onboardingItemResult>{t("energy_question")}</BasicText>
        <Blocks>
          <SelectBlock
            icon="smile"
            text={t("yes_answer")}
            color={energy === "yes" ? "#4bb543" : "#838C97"}
            colorBorder={energy === "yes" ? "#4bb543" : "#e1e6ea"}
            onClick={() => setEnergy("yes")}
          />
          <SelectBlock
            icon="meh"
            text={t("unknown_answer")}
            color={energy === "maybe" ? "#000" : "#838C97"}
            colorBorder={energy === "maybe" ? "#000" : "#e1e6ea"}
            onClick={() => setEnergy("maybe")}
          />
          <SelectBlock
            icon="frown"
            text={t("no_answer")}
            color={energy === "no" ? "#de4733" : "#838C97"}
            colorBorder={energy === "no" ? "#de4733" : "#e1e6ea"}
            onClick={() => setEnergy("no")}
          />
        </Blocks>
      </Row>
      <Row>
        <BasicText onboardingItemResult>{t("feedback_question")}</BasicText>
        <Blocks>
          <SelectBlock
            icon="smile"
            text={t("yes_answer")}
            color={feedback === "yes" ? "#4bb543" : "#838C97"}
            colorBorder={feedback === "yes" ? "#4bb543" : "#e1e6ea"}
            onClick={() => setFeedback("yes")}
          />
          <SelectBlock
            icon="meh"
            text={t("unknown_answer")}
            color={feedback === "maybe" ? "#000" : "#838C97"}
            colorBorder={feedback === "maybe" ? "#000" : "#e1e6ea"}
            onClick={() => setFeedback("maybe")}
          />
          <SelectBlock
            icon="frown"
            text={t("no_answer")}
            color={feedback === "no" ? "#de4733" : "#838C97"}
            colorBorder={feedback === "no" ? "#de4733" : "#e1e6ea"}
            onClick={() => setFeedback("no")}
          />
        </Blocks>
      </Row>
    </>
  );
};

export default OnboardingFormResult;
