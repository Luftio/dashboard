import React from "react";
import styled from "styled-components";
import Link from "next/link";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../../elements/Button";
import Subheading from "../../elements/Subheading";
import BasicText from "../../elements/BasicText";
import DetailRowText from "../../elements/DetailRow";

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

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

interface EventsDetailBlockProps {
  title: string;
  date: string;
  place: string;
  threat: number;
  justification: string;
}

const EventsDetailBlock: React.FC<EventsDetailBlockProps> = ({ title, date, place, threat, justification }) => {
  const { t } = useTranslation<string>();

  return (
    <Card>
      <TopRow>
        <Subheading contentBlockItem>{title}</Subheading>
        <Link href="/events">
          <Button>{t("detail_close")}</Button>
        </Link>
      </TopRow>
      <BottomRow>
        <Icon name="clock" size="16" color="#838C97" />
        <BasicText events>{date}</BasicText>
        <Icon name="map-pin" size="16" color="#838C97" />
        <BasicText events>{place}</BasicText>
      </BottomRow>
      <DetailRowText type="bar" subheading={t("detail_events_threat")} value={threat} />
      <DetailRowText type="text" subheading={t("detail_events_justify")} text={justification} value={0} />
    </Card>
  );
};

export default EventsDetailBlock;
