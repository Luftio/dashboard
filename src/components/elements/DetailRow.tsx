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

interface Props {
  subheading: string;
  text?: string;
  type: string;
  value: number;
  low?: boolean;
  medium?: boolean;
  high?: boolean;
}

const DetailRowText: React.FC<Props> = ({ subheading, text, type, value, low, medium, high }) => {
  const { t } = useTranslation<string>();

  return (
    <Row>
      <Subheading>{subheading}</Subheading>
      {type === "text" && (
        <ContentDiv>
          <Text>{text}</Text>
        </ContentDiv>
      )}
      {type === "importance" && <ImportanceBlocks block low={low} medium={medium} high={high} />}
      {type === "range" && <RangeSlider />}
      {type === "select" && (
        <Blocks>
          <SelectBlock icon="thermometer" text={t("detail_feedback_temp_cold")} color="#5A8AD3" colorBorder="#5A8AD3" />
          <SelectBlock
            icon="thermometer"
            text={t("detail_feedback_temp_medium")}
            color="#838C97"
            colorBorder="#e1e6ea"
          />
          <SelectBlock icon="thermometer" text={t("detail_feedback_temp_hot")} color="#838C97" colorBorder="#e1e6ea" />
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
