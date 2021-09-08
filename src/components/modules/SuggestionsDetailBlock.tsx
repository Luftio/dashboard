import React from "react";
import styled from "styled-components";
import Link from "next/link";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../elements/Button";
import Subheading from "../elements/Subheading";
import BasicText from "../elements/BasicText";
import DetailRowText from "../elements/DetailRow";
import IconCircle from "../elements/IconCircle";

import { Icon } from "ts-react-feather-icons";

const Card = styled.div`
  background: #fff;
  width: 95%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.theme.border_radius_primary};
  padding: 40px 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
`;

interface SuggestionsDetailBlockProps {
  title: string;
  level?: number;
  date: string;
  description: string;
  howSolve: string;
  whyImportant: string;
}

const SuggestionsDetailBlock: React.FC<SuggestionsDetailBlockProps> = ({
  title,
  level,
  date,
  description,
  howSolve,
  whyImportant,
}) => {
  const { t } = useTranslation<string>();

  return (
    <Card>
      <Top>
        <IconCircle detail backgroundColor="#F65656" iconColor="#fff" iconName="box" />
        <Row>
          <TopRow>
            <Subheading contentBlockItem>{title}</Subheading>
            <Link href="/suggestions">
              <Button>{t("detail_close")}</Button>
            </Link>
          </TopRow>
          <BottomRow>
            <Icon name="clock" size="16" color="#838C97" />
            <BasicText events>{date}</BasicText>
          </BottomRow>
        </Row>
      </Top>

      <DetailRowText type="importance" subheading={t("detail_suggestions_importance")} level={level} value={0} />
      <DetailRowText
        type="text"
        subheading={t("detail_suggestions_description")}
        level={0}
        text={description}
        value={0}
      />
      <DetailRowText type="text" subheading={t("detail_suggestions_solve")} level={0} text={howSolve} value={0} />
      <DetailRowText type="text" subheading={t("detail_suggestions_matter")} level={0} text={whyImportant} value={0} />
    </Card>
  );
};

export default SuggestionsDetailBlock;
