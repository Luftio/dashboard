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
  level?: number;
}

const ImportanceBlocks: React.FC<ImportanceBlocksProps> = ({ level }) => {
  return (
    <Blocks>
      {level == 1 ? (
        <>
          <Level fill={true}></Level>
          <Level fill={false}></Level>
          <Level fill={false}></Level>
        </>
      ) : level == 2 ? (
        <>
          <Level fill={true}></Level>
          <Level fill={true}></Level>
          <Level fill={false}></Level>
        </>
      ) : (
        <>
          <Level fill={true}></Level>
          <Level fill={true}></Level>
          <Level fill={true}></Level>
        </>
      )}
    </Blocks>
  );
};

export default ImportanceBlocks;
