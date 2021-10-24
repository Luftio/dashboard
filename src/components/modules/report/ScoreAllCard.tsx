import React from "react";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import BasicText from "../../elements/BasicText";
import ScoreAllChart from "./ScoreAllChart";
import EmptyCard from "../dashboard/EmptyCard";
import Loader from "../../elements/Loader";

const Card = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.border_radius_primary};
  background-color: #fff;
  box-shadow: ${(props) => props.theme.color_block_box_shadow};
  padding: 15px 15px;
  margin-top: 1.7%;
  margin-bottom: 1.7%;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.08);
    transition: ${(props) => props.theme.transition_primary};
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ChartDiv = styled.div`
  display: flex;
  justify-content: center;
`;

interface ScoreAllCardProps {
  subheading: string;
  score?: number;
  loading: boolean;
}

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 405px;
  justify-content: center;
  align-items: center;
`;

const ScoreAllCard: React.FC<ScoreAllCardProps> = ({ subheading, score, loading }) => {
  const { t } = useTranslation();

  return (
    <Card>
      <BasicText name>{subheading}</BasicText>
      {score ? (
        <ChartDiv>
          <ScoreAllChart averageScore={score} />
        </ChartDiv>
      ) : loading ? (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      ) : (
        <EmptyCard message={t("dashboard_empty_data")} />
      )}
    </Card>
  );
};

export default ScoreAllCard;
