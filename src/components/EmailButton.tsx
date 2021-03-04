import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin: 0 20px 15px 0;
  font-weight: 600;
  font-size: 14px;
  color: #afb8bf;
  height: 45px;
  border: 1px solid #e1e6ea;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #fafafa;
  }

  &:active {
    background: #e8e8e8;
  }
`;

interface Props {
  text: string;
  imageUrl: string;
  href: string;
}

const EmailButton: React.FC<Props> = ({ text, imageUrl, href }) => {
  return (
    <Div>
      <Link href={href}>
        <Button href={href}>
          <Image src={imageUrl} alt="Luftio logo" width={21} height={29} />
          &nbsp;&nbsp;&nbsp;{text}
        </Button>
      </Link>
    </Div>
  );
};

export default EmailButton;
