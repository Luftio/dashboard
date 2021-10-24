import React from "react";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import BasicText from "../../elements/BasicText";
import EmptyCard from "../dashboard/EmptyCard";
import ReportChart from "./ReportChart";
import Loader from "../../elements/Loader";

const Card = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.border_radius_primary};
  background-color: #fff;
  box-shadow: ${(props) => props.theme.color_block_box_shadow};
  padding: 15px 15px;
  margin-top: 1.7%;
  margin-bottom: 20px;
  overflow: scroll;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.08);
    transition: ${(props) => props.theme.transition_primary};
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    margin-right: 0;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Main = styled.div`
  position: relative;
`;

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 340px;

  justify-content: center;
  align-items: center;
`;

interface ReportCardProps {
  data?: any;
  subheading: string;
  loading: boolean;
}

const ReportCard: React.FC<ReportCardProps> = ({ data, subheading, loading }) => {
  const { t } = useTranslation();

  return (
    <Card>
      <Main>
        <TopRow>
          <BasicText name>{subheading}</BasicText>
        </TopRow>
        {data != null ? (
          <ReportChart data={data} />
        ) : loading ? (
          <LoadingWrapper>
            <Loader />
          </LoadingWrapper>
        ) : (
          <EmptyCard message={t("dashboard_empty_data")} />
        )}
      </Main>
    </Card>
  );
};

export default ReportCard;
