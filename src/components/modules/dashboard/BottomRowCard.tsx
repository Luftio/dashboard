import React from "react";
import styled from "styled-components";
import BasicText from "../../elements/BasicText";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import HapinessChart from "./FeedbackChart";
import EventsChart from "./EventsChart";

const Card = styled.div`
  width: 48.5%;
  height: 350px;
  border-radius: ${(props) => props.theme.border_radius_primary};
  background-color: #fff;
  box-shadow: ${(props) => props.theme.color_block_box_shadow};
  margin-right: 1.5%;
  padding: 15px 15px;
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

const Notification = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

const ChartDiv = styled.div`
  display: flex;
  justify-content: center;
`;

interface BottomRowCardProps {
  subheading: string;
  message1: string;
  date1: string;
  message2: string;
  date2: string;
  message3: string;
  date3: string;
  feedback?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const BottomRowCard: React.FC<BottomRowCardProps> = ({
  subheading,
  onClick,
  message1,
  date1,
  message2,
  date2,
  message3,
  date3,
  feedback,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Card onClick={onClick}>
        <BasicText name>{subheading}</BasicText>
        <ChartDiv>{feedback ? <HapinessChart /> : <EventsChart />}</ChartDiv>
        <BasicText bottomRowProcentsName>{t("dashboard_bottomcard_last")}</BasicText>
        <Notification>
          <BasicText notifications>{message1}</BasicText>
          <BasicText dateDashboard>{date1}</BasicText>
        </Notification>
        <Notification>
          <BasicText notifications>{message2}</BasicText>
          <BasicText dateDashboard>{date2}</BasicText>
        </Notification>
        <Notification>
          <BasicText notifications>{message3}</BasicText>
          <BasicText dateDashboard>{date3}</BasicText>
        </Notification>
      </Card>
    </>
  );
};

export default BottomRowCard;
