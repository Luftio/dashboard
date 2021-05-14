import React from "react";
import styled from "styled-components";

import Subheading from "../elements/Subheading";
import Button from "../elements/Button";
import BasicText from "../elements/BasicText";

const Item = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  margin: 0 auto;
  border-bottom: ${(props) => props.theme.divider};

  &:last-of-type {
    border-bottom: none;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 15px;
`;

interface ContentBlockItemProps {
  subheading: string;
  buttonText: string;
  text?: string;
  url: string;
  target?: string;
  link?: boolean;
  opacity?: string | false | undefined;
  cursor?: false | "none";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ContentBlockItem: React.FC<ContentBlockItemProps> = ({
  subheading,
  buttonText,
  text,
  url,
  target,
  link,
  opacity,
  cursor,
  onClick,
}) => {
  return (
    <Item>
      <TopRow>
        <Subheading contentBlockItem>{subheading}</Subheading>
        {link ? (
          <a href={url} target={target}>
            <Button onClick={onClick}>{buttonText}</Button>
          </a>
        ) : (
          <Button opacity={opacity} cursor={cursor} onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </TopRow>
      <BasicText contentBlockItem>{text}</BasicText>
    </Item>
  );
};

export default ContentBlockItem;
