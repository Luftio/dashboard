import React from "react";
import Link from "next/link";
import styled from "styled-components";
import moment from "moment";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import BasicText from "../../elements/BasicText";
import HapinessChart from "./FeedbackChart";
import EmptyCard from "./EmptyCard";

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

interface FeedbackCardProps {
  subheading: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ subheading }) => {
  const { t } = useTranslation();

  const query = useQuery();
  const feedback = query.feedbacks;

  const formatDate = (date: any) => {
    const dateJs = new Date(date);
    return moment(dateJs).format("DD/MM/YYYY");
  };

  return (
    <Card>
      <BasicText name>{subheading}</BasicText>
      {feedback === null || feedback.length === 0 ? (
        <EmptyCard message={t("dashboard_card_feedback_empty_state")} />
      ) : (
        <>
          <ChartDiv>
            <HapinessChart />
          </ChartDiv>
          <BasicText bottomRowProcentsName>{t("dashboard_bottomcard_last")}</BasicText>
          {feedback?.slice(0, 2).map((notification: any) => {
            [notification.id, notification.title, notification.date];
            if (notification.name == null || notification.date == null) return null;
            return (
              <Link href={"/feedback/" + notification.id} key={notification.id}>
                <Notification>
                  <BasicText notifications>{notification.name}</BasicText>
                  <BasicText dateDashboard>{formatDate(notification.date)}</BasicText>
                </Notification>
              </Link>
            );
          })}
        </>
      )}
    </Card>
  );
};

export default FeedbackCard;
