import React from "react";
import styled from "styled-components";
import Link from "next/link";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../elements/Button";
import Subheading from "../elements/Subheading";
import BasicText from "../elements/BasicText";
import DetailRowText from "../elements/DetailRow";

import { Icon } from "ts-react-feather-icons";

import { useQuery } from "../../gqless";

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

const FeedbackDetailBlock: React.FC = () => {
  const { t } = useTranslation<string>();

  const query = useQuery();

  return (
    <Card>
      <TopRow>
        <Subheading contentBlockItem>{query.feedbackDetail?.name}</Subheading>
        <Link href="/feedback">
          <Button>{t("detail_close")}</Button>
        </Link>
      </TopRow>
      <BottomRow>
        <Icon name="clock" size="16" color="#838C97" />
        <BasicText events>{query.feedbackDetail?.date}</BasicText>
      </BottomRow>
      <DetailRowText type="select" subheading={t("detail_feedback_temp")} value={0} />
      <DetailRowText type="range" subheading={t("detail_feedback_air")} value={0} />
      <DetailRowText
        type="text"
        subheading={t("detail_feedback_satisfied")}
        text={query.feedbackDetail?.how_feel}
        value={0}
      />
    </Card>
  );
};

export default FeedbackDetailBlock;
