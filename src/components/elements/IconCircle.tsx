import React from "react";
import styled, { css } from "styled-components";

import { Icon } from "ts-react-feather-icons";

const Circle = styled.div<{ background?: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.background};
  margin-right: 5%;

  @media only screen and (max-width: 750px) {
    display: none;
  }
`;

interface IconCircleProps {
  iconName: any;
  iconColor: string;
  backgroundColor: string;
}

const IconCircle: React.FC<IconCircleProps> = ({ iconColor, iconName, backgroundColor }) => {
  return (
    <Circle background={backgroundColor}>
      <Icon name={iconName} color={iconColor} />
    </Circle>
  );
};

export default IconCircle;
