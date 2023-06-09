import React from "react";
import styled from "styled-components";
import Link from "next/link";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../elements/Button";
import Subheading from "../elements/Subheading";
import BasicText from "../elements/BasicText";
import DetailRowText from "../elements/DetailRow";
import Avatar from "react-avatar";

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

const Wrapper = styled.div`
  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
`;

interface FeedbackDetailBlockProps {
  name: string;
  date: string;
  howFeel: string;
  howBreath: number;
  temperatureLevel: number;
  event?: boolean;
  place?: string;
}

const FeedbackDetailBlock: React.FC<FeedbackDetailBlockProps> = ({
  name,
  date,
  howFeel,
  event = false,
  place = null,
  howBreath,
  temperatureLevel,
}) => {
  const { t } = useTranslation<string>();

  return (
    <Card>
      <Top>
        <Wrapper>
          <Avatar
            name={name}
            round={true}
            size="50"
            color="#E1E6EA"
            style={{
              fontFamily: "inherit",
              fontWeight: "600",
              letterSpacing: "1px",
              position: "relative",
              top: "7px",
              marginRight: "25px",
            }}
          />
        </Wrapper>
        <Row>
          <TopRow>
            <Subheading contentBlockItem>{name}</Subheading>
            <Link href={event ? "/events/from-employees" : "/feedback"}>
              <Button>{t("detail_close")}</Button>
            </Link>
          </TopRow>
          <BottomRow>
            <Icon name="clock" size="16" color="#838C97" />
            <BasicText events>{date}</BasicText>
            {event && (
              <>
                <Icon name="map-pin" size="16" color="#838C97" />
                <BasicText events>{place}</BasicText>
              </>
            )}
          </BottomRow>
        </Row>
      </Top>
      <DetailRowText type="select" subheading={t("detail_feedback_temp")} value={0} temperature={temperatureLevel} />
      <DetailRowText type="range" subheading={t("detail_feedback_air")} value={howBreath} />
      <DetailRowText type="text" subheading={t("detail_feedback_satisfied")} text={howFeel} value={0} />
    </Card>
  );
};

export default FeedbackDetailBlock;
