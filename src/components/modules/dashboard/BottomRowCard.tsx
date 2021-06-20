import React from "react";
import Link from "next/link";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import BasicText from "../../elements/BasicText";
import HapinessChart from "./FeedbackChart";
import EventsChart from "./EventsChart";

import { useQuery } from "../../../gqless";

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
  cursor: pointer;
`;

const ChartDiv = styled.div`
  display: flex;
  justify-content: center;
`;

interface BottomRowCardProps {
  subheading: string;
  feedback?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const BottomRowCard: React.FC<BottomRowCardProps> = ({ subheading, onClick, feedback }) => {
  const { t } = useTranslation();

  const query = useQuery();
  const feedbackNotifications = query.feedbackNotifications({ id: "1" });
  const eventsNotifications = query.eventsNotifications({ id: "1" });

  return (
    <>
      <Card onClick={onClick}>
        <BasicText name>{subheading}</BasicText>
        <ChartDiv>{feedback ? <HapinessChart /> : <EventsChart />}</ChartDiv>
        <BasicText bottomRowProcentsName>{t("dashboard_bottomcard_last")}</BasicText>
        {feedback
          ? feedbackNotifications?.map((notification) => (
              <Link href="/feedback/detail" key={notification.id}>
                <Notification>
                  <BasicText notifications>{notification.title}</BasicText>
                  <BasicText dateDashboard>{notification.date}</BasicText>
                </Notification>
              </Link>
            ))
          : eventsNotifications?.map((notification) => (
              <Link href="/events/from-measurement/detail" key={notification.id}>
                <Notification>
                  <BasicText notifications>{notification.title}</BasicText>
                  <BasicText dateDashboard>{notification.date}</BasicText>
                </Notification>
              </Link>
            ))}
      </Card>
    </>
  );
};

export default BottomRowCard;
