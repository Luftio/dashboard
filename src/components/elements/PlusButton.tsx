import React from "react";
import styled from "styled-components";

import { Icon } from "ts-react-feather-icons";

const Circle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color_placeholder};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color_button_plus_hover};
    transition: ${(props) => props.theme.transition_primary};
  }

  &:active {
    background-color: ${(props) => props.theme.color_placeholder};
  }
`;

const PlusButton: React.FC = () => {
  return (
    <Circle>
      <Icon name="plus" color="#838C97" size="20px" />
    </Circle>
  );
};

export default PlusButton;
