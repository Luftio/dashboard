import React from "react";
import Image from "next/image";
import styled from "styled-components";

import BasicText from "../elements/BasicText";
import Tag from "../elements/Tag";
import PlusButton from "../elements/PlusButton";

const Div = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 45px;
`;

const Main = styled.div`
  margin-left: 4%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TopRow = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex: 1;
  align-items: center;
`;

interface IntegrationProps {
  logo: string;
  title: string;
  tagTitle1: string;
  tagBgColor1: string;
  tagTitle2: string;
  tagBgColor2: string;
  description: string;
  isAdded: boolean;
}

const Integration: React.FC<IntegrationProps> = ({
  logo,
  title,
  tagTitle1,
  tagBgColor1,
  tagTitle2,
  tagBgColor2,
  description,
  isAdded,
}) => {
  return (
    <Div>
      <Image src={logo} alt="Gmail logo" width={40} height={40} />
      <Main>
        <TopRow>
          <BasicText integrationTitle>{title}</BasicText>
          <Tag tagTitle={tagTitle1} bgColor={tagBgColor1} />
          <Tag tagTitle={tagTitle2} bgColor={tagBgColor2} />
        </TopRow>
        <BasicText>{description}</BasicText>
      </Main>
      <PlusButton isAdded={isAdded} />
    </Div>
  );
};

export default Integration;
