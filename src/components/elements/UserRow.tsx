import React from "react";
import styled, { css } from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import { Icon } from "ts-react-feather-icons";
import SelectItem from "./SelectItem";

const Row = styled.div`
  width: 85%;
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  padding: 14px 0;
  margin: 0 auto;
  align-items: center;
  position: relative;

  &:hover {
    background-color: ${(props) => props.theme.color_button_hover};

    > span {
      display: inline;
    }
  }

  &:last-of-type {
    margin-bottom: 53px;
    z-index: 0;
  }

  > span {
    display: none;

    @media only screen and (max-width: 850px) {
      display: inline;
    }
  }
`;

const Name = styled.p<{ isPeding?: boolean }>`
  display: flex;
  width: 31%;
  font-size: ${(props) => props.theme.font_size_secondary};
  font-weight: ${(props) => props.theme.font_weight_primary};

  @media only screen and (max-width: 1075px) {
    width: 50%;
  }

  @media only screen and (max-width: 700px) {
    width: 31%;
  }

  ${(props) =>
    props.isPeding &&
    css`
      color: ${(props) => props.theme.color_date};
    `}
`;

const Email = styled.p<{ isPeding?: boolean }>`
  display: flex;
  width: 31%;
  font-size: ${(props) => props.theme.font_size_secondary};

  ${(props) =>
    props.isPeding &&
    css`
      color: ${(props) => props.theme.color_date};
    `}

  @media only screen and (max-width: 1075px) {
    display: none;
  }
`;

const IconSpan = styled.span`
  height: 18px;
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

const NotAccepted = styled.p`
  font-size: ${(props) => props.theme.font_size_secondary};
  color: ${(props) => props.theme.color_date};
`;

interface UserRowProps {
  name: string;
  email: string;
  role: string;
  isPending: boolean;
  onClick: () => void;
}

const UserRow: React.FC<UserRowProps> = ({ name, email, role, isPending, onClick }) => {
  const { t } = useTranslation<string>();

  return (
    <>
      <Row>
        <Name isPeding={isPending}>{name}</Name>
        <Email isPeding={isPending}>{email}</Email>
        <SelectItem isPending={isPending}>
          <select value={role}>
            <option value="user">{t("manage_users_user_heading")}</option>
            <option value="manager">{t("manage_users_manager_heading")}</option>
          </select>
        </SelectItem>
        {isPending && <NotAccepted>{t("manage_users_pending")}</NotAccepted>}
        <IconSpan onClick={onClick}>
          <Icon name="x-circle" size="18px" color="#F36A66" />
        </IconSpan>
      </Row>
    </>
  );
};

export default UserRow;
