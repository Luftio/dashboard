import React from "react";
import Link from "next/link";
import styled from "styled-components";
import moment from "moment";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import BasicText from "../../elements/BasicText";
import EventsChart from "./EventsChart";
import EmptyCard from "./EmptyCard";

import { useGetEventsFromMeasureQuery } from "../../../graphql";

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

interface EventsCardProps {
  subheading: string;
}

const EventsCard: React.FC<EventsCardProps> = ({ subheading }) => {
  const { t } = useTranslation();

  const query = useGetEventsFromMeasureQuery();
  const eventsFromMeasure = query.data?.events_from_measure ?? [];

  const formatDate = (date: any) => {
    const dateJs = new Date(date);
    return moment(dateJs).format("DD/MM/YYYY");
  };

  return (
    <Card>
      <BasicText name>{subheading}</BasicText>
      {eventsFromMeasure === null || eventsFromMeasure.length === 0 ? (
        <EmptyCard message={t("dashboard_card_events_empty_state")} />
      ) : (
        <>
          <ChartDiv>
            <EventsChart />
          </ChartDiv>
          <BasicText bottomRowProcentsName>{t("dashboard_bottomcard_last")}</BasicText>
          {eventsFromMeasure?.slice(0, 2).map((notification: any) => {
            if (notification.title == null || notification.date == null) return null;
            return (
              <Link href={"/events/" + notification.id} key={notification.id}>
                <Notification>
                  <BasicText notifications>{notification.title}</BasicText>
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

export default EventsCard;
