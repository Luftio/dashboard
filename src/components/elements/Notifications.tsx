import React from "react";
import styled, { css } from "styled-components";

const Circle = styled.div<{ hover?: boolean; sidebar?: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(props) => props.theme.color_notifications};
  color: #fff;
  font-size: ${(props) => props.theme.font_size_secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;

  ${(props) =>
    props.hover &&
    css`
      position: absolute;
      right: 25px;
      top: 12px;
    `}

  ${(props) =>
    props.sidebar &&
    css`
      position: absolute;
      right: 0;
      margin-right: 10%;
    `}
`;

interface NotificationsProps {
  amount?: number;
  type?: boolean;
  sidebar?: boolean;
}

const Notifications: React.FC<NotificationsProps> = ({ amount, type, sidebar }) => {
  return (
    <>
      {amount != 0 && (
        <Circle hover={type} sidebar={sidebar}>
          {amount}
        </Circle>
      )}
    </>
  );
};

export default Notifications;
