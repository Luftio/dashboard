import React from "react";
import styled, { css } from "styled-components";

const Blocks = styled.div`
  display: flex;
  align-items: center;
`;

const Level = styled.div<{ fill?: boolean }>`
  width: 17px;
  height: 17px;
  border-radius: ${(props) => props.theme.border_radius_checkbox};
  border: ${(props) => props.theme.border_primary};
  margin-right: 5px;

  ${(props) =>
    props.fill &&
    css`
      background-color: rgba(3, 24, 70, 0.8);
      border: none;
    `}
`;

interface ImportanceBlocksProps {
  low?: boolean;
  medium?: boolean;
  high?: boolean;
}

const ImportanceBlocks: React.FC<ImportanceBlocksProps> = ({ low, medium, high }) => {
  return (
    <Blocks>
      <Level fill={low || medium || (high && true)}></Level>
      <Level fill={medium || (high && true)}></Level>
      <Level fill={high && true}></Level>
    </Blocks>
  );
};

export default ImportanceBlocks;
