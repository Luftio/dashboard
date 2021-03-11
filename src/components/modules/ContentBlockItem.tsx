import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import Subheading from "../elements/Subheading";
import Button from "../elements/Button";
import BasicText from "../elements/BasicText";

const Item = styled.div`
  display: flex;
  width: 85%;
  height: 150px;
  flex-direction: column;
  margin: 0 auto;
  border-bottom: ${(props) => props.theme.divider};

  &:last-child {
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

interface Props {
  subheading: string;
  buttonText: string;
  text: string;
  url: string;
  target?: string;
  link?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ContentBlock: React.FC<Props> = ({
  subheading,
  buttonText,
  text,
  url,
  target,
  link,
  onClick,
}) => {
  return (
    <>
      <Item>
        <TopRow>
          <Subheading dashboard>{subheading}</Subheading>
          {link ? (
            <Link href={url}>
              <a target={target}>
                <Button onClick={onClick}>{buttonText}</Button>
              </a>
            </Link>
          ) : (
            <Button onClick={onClick}>{buttonText}</Button>
          )}
        </TopRow>
        <BasicText>{text}</BasicText>
      </Item>
    </>
  );
};

export default ContentBlock;
