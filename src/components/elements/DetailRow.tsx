import React from "react";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import ImportanceBlocks from "../elements/ImportanceBlocks";
import RangeSlider from "./RangeSlider";
import SelectBlock from "./SelectBlock";
import ThreatBar from "./ThreatBar";

const Row = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Subheading = styled.p`
  font-size: ${(props) => props.theme.font_size_secondary};
  color: ${(props) => props.theme.color_primary};
  white-space: nowrap;
  width: 30%;

  @media only screen and (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;

const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ContentDiv = styled.p<{ main?: boolean }>`
  display: flex;
  flex: 1;
`;

const Text = styled.p<{ main?: boolean }>`
  font-size: ${(props) => props.theme.font_size_secondary};
`;

interface DetailRowTextProps {
  subheading: string;
  text?: string;
  type: string;
  value: any;
  level?: number;
  temperature?: number;
}

const DetailRowText: React.FC<DetailRowTextProps> = ({ subheading, text, type, value, level, temperature }) => {
  const { t } = useTranslation<string>();

  return (
    <Row>
      <Subheading>{subheading}</Subheading>
      {type === "text" && (
        <ContentDiv>
          <Text>{text}</Text>
        </ContentDiv>
      )}
      {type === "importance" && <ImportanceBlocks level={level} />}
      {type === "range" && <RangeSlider value={value} />}
      {type === "select" && (
        <Blocks>
          <SelectBlock
            icon="thermometer"
            text={t("detail_feedback_temp_cold")}
            color={temperature == 1 ? "#5A8AD3" : "#838C97"}
            colorBorder={temperature == 1 ? "#5A8AD3" : "#838C97"}
          />
          <SelectBlock
            icon="thermometer"
            text={t("detail_feedback_temp_medium")}
            color={temperature == 2 ? "#5A8AD3" : "#838C97"}
            colorBorder={temperature == 2 ? "#5A8AD3" : "#838C97"}
          />
          <SelectBlock
            icon="thermometer"
            text={t("detail_feedback_temp_hot")}
            color={temperature == 3 ? "#5A8AD3" : "#838C97"}
            colorBorder={temperature == 3 ? "#5A8AD3" : "#838C97"}
          />
        </Blocks>
      )}
      {type === "bar" && (
        <ThreatBar background={value > 75 ? "#E55B5B" : value > 40 ? "#FFB951" : "#23A454"} score={value}>
          <div></div>
        </ThreatBar>
      )}
    </Row>
  );
};

export default DetailRowText;
