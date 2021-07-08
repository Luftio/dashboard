import React from "react";
import styled, { css } from "styled-components";

import { Icon } from "ts-react-feather-icons";

const Circle = styled.div<{ isAdded?: boolean }>`
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

  ${(props) =>
    props.isAdded &&
    css`
      background-color: #a2ebbe;

      &:hover {
        background-color: #a2ebbe;
      }

      &:active {
        background-color: #a2ebbe;
      }
    `}
`;

interface PlusButtonProps {
  isAdded: boolean;
}

const PlusButton: React.FC<PlusButtonProps> = ({ isAdded }) => {
  return (
    <Circle isAdded={isAdded}>
      <Icon name={isAdded ? "check" : "plus"} color={isAdded ? "#23A454" : "#838C97"} size="20px" />
    </Circle>
  );
};

export default PlusButton;
