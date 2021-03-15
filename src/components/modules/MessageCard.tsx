import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import BasicText from "../elements/BasicText";

const Card = styled.div`
  background: #fff;
  width: 95%;
  box-shadow: ${(props) => props.theme.color_block_box_shadow};
  border-bottom: ${(props) => props.theme.divider};
  align-items: center;
  cursor: pointer;

  &:first-of-type {
    border-radius: ${(props) => props.theme.border_radius_primary} ${(props) => props.theme.border_radius_primary} 0 0;
  }

  &:last-of-type {
    border-bottom: none;
    border-radius: 0 0 ${(props) => props.theme.border_radius_primary} ${(props) => props.theme.border_radius_primary};
  }

  &:hover {
    background-color: ${(props) => props.theme.color_message_card_hover};
    transition: ${(props) => props.theme.transition_primary};
  }
`;

const Message = styled.div`
  display: flex;
  width: 85%;
  height: 75px;
  margin: 0 auto;
  align-items: center;
`;

const Score = styled.div`
  display: flex;
  flex: 0.5;
`;

const Level = styled.div<{ fill?: boolean }>`
  width: 17px;
  height: 17px;
  border-radius: ${(props) => props.theme.border_radius_checkbox};
  border: ${(props) => props.theme.border_primary};
  margin-right: 5px;

  ${(props) =>
    props.fill &&
    css`
      background-color: rgba(3, 24, 70, 0.8);
      border: none;
    `}
`;

interface Props {
  name: string;
  procents: number;
  date: string;
  suggestion?: boolean;
  low?: boolean;
  medium?: boolean;
  high?: boolean;
}

const MessageCard: React.FC<Props> = ({ name, procents, date, suggestion, low, medium, high }) => {
  const { t } = useTranslation<string>();

  return (
    <Link href="/support">
      <Card>
        <Message>
          <BasicText name>{name}</BasicText>
          {suggestion ? (
            <Score>
              <BasicText>{t("suggestion_score_text")}&nbsp;&nbsp;</BasicText>
              <Level fill={low || medium || (high && true)}></Level>
              <Level fill={medium || (high && true)}></Level>
              <Level fill={high && true}></Level>
            </Score>
          ) : (
            <Score>
              <BasicText>{t("feedback_score_text")}&nbsp;&nbsp;</BasicText>
              <BasicText color={procents > 75 ? "#23A454" : procents > 40 ? "#FFB951" : "#E55B5B"} procents>
                {procents}&nbsp;%
              </BasicText>
            </Score>
          )}

          <BasicText date>{date}</BasicText>
        </Message>
      </Card>
    </Link>
  );
};

export default MessageCard;
