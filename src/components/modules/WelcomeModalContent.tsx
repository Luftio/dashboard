import React from "react";
import styled from "styled-components";

import BasicText from "../elements/BasicText";

import { Icon } from "ts-react-feather-icons";

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Close = styled.p`
  cursor: pointer;
  position: relative;
  bottom: 10px;
`;

interface WelcomeModalContentProps {
  heading: string;
  text: string;
  close: () => void;
}

const WelcomeModalContent: React.FC<WelcomeModalContentProps> = ({ heading, text, close }) => {
  return (
    <Content>
      <TopRow>
        <BasicText welcomeModalHeading>{heading}</BasicText>
        <Close onClick={close}>
          <Icon name="x" size="22" color="#838C97" />
        </Close>
      </TopRow>
      <BasicText>{text}</BasicText>
    </Content>
  );
};

export default WelcomeModalContent;
