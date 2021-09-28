import React from "react";
import Link from "next/link";
import styled from "styled-components";

import Avatar from "react-avatar";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import BasicText from "../elements/BasicText";
import ImportanceBlocks from "../elements/ImportanceBlocks";
import IconCircle from "../elements/IconCircle";

const Wrapper = styled.div`
  margin-right: 5%;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

const Card = styled.div`
  background: #fff;
  width: 95%;
  box-shadow: ${(props) => props.theme.color_block_box_shadow};
  border-bottom: ${(props) => props.theme.divider};
  align-items: center;
  cursor: pointer;
  border-radius: ${(props) => props.theme.border_radius_primary};

  &:first-of-type {
    border-radius: ${(props) => props.theme.border_radius_primary} ${(props) => props.theme.border_radius_primary} 0 0;
  }

  &:last-of-type {
    border-bottom: none;
    border-radius: 0 0 ${(props) => props.theme.border_radius_primary} ${(props) => props.theme.border_radius_primary};
    margin-bottom: 20px;
  }

  &:only-child {
    border-radius: ${(props) => props.theme.border_radius_primary};
  }

  &:hover {
    background-color: ${(props) => props.theme.color_message_card_hover};
    transition: ${(props) => props.theme.transition_primary};
  }

  &:active {
    background-color: ${(props) => props.theme.color_button_active};
  }
`;

const Message = styled.div`
  display: flex;
  width: 85%;
  height: 75px;
  margin: 0 auto;
  align-items: center;

  @media only screen and (max-width: 850px) {
    justify-content: space-between;
  }
`;

const Score = styled.div`
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
  margin-left: 30px;

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

interface MessageCardProps {
  name: string;
  procents: number;
  date: string;
  suggestion?: boolean;
  level?: number;
  href: string;
  unread: boolean;
  iconName: string;
  iconBgColor: string;
}

const MessageCard: React.FC<MessageCardProps> = ({
  name,
  procents,
  date,
  suggestion,
  level,
  href,
  unread,
  iconName,
  iconBgColor,
}) => {
  const { t } = useTranslation<string>();

  return (
    <Link href={href}>
      <Card>
        <Message>
          {suggestion ? (
            <IconCircle backgroundColor={iconBgColor} iconColor="#fff" iconName={iconName} />
          ) : (
            <Wrapper>
              <Avatar
                name={name}
                round={true}
                size="50"
                color="#E1E6EA"
                style={{ fontFamily: "inherit", fontWeight: "600", letterSpacing: "1px" }}
              />
            </Wrapper>
          )}
          <BasicText name>{name}</BasicText>
          {suggestion ? (
            <Score>
              <BasicText>{t("suggestion_score_text")}&nbsp;&nbsp;</BasicText>
              <ImportanceBlocks level={level} />
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
          <Unread display={unread ? "1" : "0"}></Unread>
        </Message>
      </Card>
    </Link>
  );
};

export default MessageCard;
