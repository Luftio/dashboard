import React from "react";
import Image from "next/image";
import "../i18n";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Div = styled.div`
  margin: 50px 0 40px 0;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  margin-top: 60px;
`;

const Message = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: #838c97;
  margin-top: 10px;
`;

interface Props {
  heading: string;
  message: string;
}
const Header: React.FC<Props> = ({ heading, message }) => {
  const { t } = useTranslation();

  return (
    <Div>
      <Image src="/static/logo.svg" alt="Luftio logo" width={120} height={45} />
      <Heading>{heading}</Heading>
      <Message>{message}</Message>
    </Div>
  );
};

export default Header;
