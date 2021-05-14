import React from "react";
import Image from "next/image";
import styled from "styled-components";
import BasicText from "../elements/BasicText";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px auto 0 auto;
`;

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <Div>
      <Image src="/static/EmptyState.svg" alt="Empty State" width={360} height={302} />
      <BasicText emptystate>{message}</BasicText>
    </Div>
  );
};

export default EmptyState;
