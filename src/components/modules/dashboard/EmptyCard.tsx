import React from "react";
import Image from "next/image";
import styled from "styled-components";
import BasicText from "../../elements/BasicText";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  height: 100%;
`;

interface EmptyCartProps {
  message: string;
}

const EmptyCard: React.FC<EmptyCartProps> = ({ message }) => {
  return (
    <Div>
      <Image src="/static/EmptyState.svg" alt="Empty State" width={279} height={236} />
      <BasicText emptycard>{message}</BasicText>
    </Div>
  );
};

export default EmptyCard;
