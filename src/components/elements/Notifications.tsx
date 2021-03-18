import React from "react";
import styled, { css } from "styled-components";

const Circle = styled.div<{ hover?: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.theme.color_notifications};
  color: #fff;
  font-size: ${(props) => props.theme.font_size_secondary};
  display: flex;
  justify-content: center;
  margin-left: 50px;

  ${(props) =>
    props.hover &&
    css`
      position: absolute;
      right: 25px;
    `}
`;

interface Props {
  amount?: number;
  type?: boolean;
}

const Notifications: React.FC<Props> = ({ amount, type }) => {
  return <Circle hover={type}>{amount}</Circle>;
};

export default Notifications;
