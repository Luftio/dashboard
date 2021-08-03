import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import BasicText from "../elements/BasicText";
import Button from "../elements/Button";
import HaveAccount from "../elements/HaveAccount";
import SelectBlock from "../elements/SelectBlock";

const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OnboardingForm: React.FC = () => {
  const { t } = useTranslation<string>();
  const router = useRouter();

  const [productivity, setProductivity] = useState<string>("");
  const [energy, setEnergy] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  const onSubmit = () => {
    console.log(productivity, energy, feedback);
    router.replace("/dashboard/all");
  };

  return (
    <>
      <BasicText onboardingItem>{t("productivity_question")}</BasicText>
      <form onSubmit={onSubmit}>
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
        <BasicText onboardingItem>{t("energy_question")}</BasicText>
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
        <BasicText onboardingItem>{t("feedback_question")}</BasicText>
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
        <Button primary type="submit">
          {t("start")}
        </Button>
      </form>
      <HaveAccount>
        <p>{t("fill_later")}&nbsp;</p>
        <Link href="/dashboard/all">
          <a>{t("skip")}</a>
        </Link>
      </HaveAccount>
    </>
  );
};

export default OnboardingForm;
