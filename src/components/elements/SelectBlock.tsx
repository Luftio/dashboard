import React from "react";
import styled from "styled-components";

import { Icon } from "ts-react-feather-icons";
import BasicText from "./BasicText";

const Select = styled.div<{ color?: string }>`
  border-radius: ${(props) => props.theme.border_radius_primary};
  border: 1px solid ${(props) => props.color};
  width: 130px;
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;

interface Props {
  color: string;
  text: string;
  colorBorder: string;
  icon: any;
  onClick?: () => void;
}

const SelectBlock: React.FC<Props> = ({ color, text, colorBorder, icon, onClick }) => {
  return (
    <Select color={colorBorder} onClick={onClick}>
      <Icon name={icon} size="18" color={color} />
      <BasicText select color={color}>
        {text}
      </BasicText>
    </Select>
  );
};

export default SelectBlock;
