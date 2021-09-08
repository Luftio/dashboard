import React from "react";
import Link from "next/link";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import BasicText from "../../elements/BasicText";
import ThreatBar from "../../elements/ThreatBar";

import { Icon } from "ts-react-feather-icons";
import IconCircle from "../../elements/IconCircle";

const Card = styled.div`
  background: #fff;
  width: 95%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  cursor: pointer;
  border-radius: ${(props) => props.theme.border_radius_primary};
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    transition: ${(props) => props.theme.transition_primary};
  }
`;

const Event = styled.div`
  display: flex;
  width: 85%;
  height: 75px;
  margin: 0 auto;
  align-items: center;

  @media only screen and (max-width: 850px) {
    justify-content: space-between;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;

  @media only screen and (max-width: 850px) {
    flex: initial;
  }
`;

const BottomRow = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Threat = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;

  @media only screen and (max-width: 850px) {
    flex: initial;
  }
`;

const Unread = styled.div<{ display: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(3, 24, 70, 0.8);
  opacity: ${(props) => props.display};

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

interface EventsCardProps {
  name: string;
  threat: number;
  time: string;
  location: string;
  unread?: boolean;
  href: string;
}

const EventsCard: React.FC<EventsCardProps> = ({ name, threat, time, location, unread, href }) => {
  const { t } = useTranslation<string>();

  return (
    <Link href={href}>
      <Card>
        <Event>
          {/* <IconCircle backgroundColor="#E1E6EA" iconColor="#fff" iconName="cloud" /> */}
          <Main>
            <BasicText name>{name}</BasicText>
            <BottomRow>
              <Icon name="clock" size="16" color="#838C97" />
              <BasicText events>{time}</BasicText>
              <Icon name="map-pin" size="16" color="#838C97" />
              <BasicText events>{location}</BasicText>
            </BottomRow>
          </Main>
          <Threat>
            <BasicText>{t("events_page_threat")}&nbsp;&nbsp;</BasicText>
            <ThreatBar background={threat > 75 ? "#E55B5B" : threat > 40 ? "#FFB951" : "#23A454"} score={threat}>
              <div></div>
            </ThreatBar>
          </Threat>
          <Unread display={unread ? "1" : "0"}></Unread>
        </Event>
      </Card>
    </Link>
  );
};

export default EventsCard;
