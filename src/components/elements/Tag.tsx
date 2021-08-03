import React from "react";
import styled from "styled-components";
import BasicText from "./BasicText";

const TagDiv = styled.div<{ background?: string }>`
  padding: 6px 15px;
  border-radius: ${(props) => props.theme.border_radius_secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-color: ${(props) => props.background};

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

interface TagProps {
  tagTitle: string;
  bgColor: string;
}

const Tag: React.FC<TagProps> = ({ tagTitle, bgColor }) => {
  return (
    <TagDiv background={bgColor}>
      <BasicText tag>{tagTitle}</BasicText>
    </TagDiv>
  );
};

export default Tag;
