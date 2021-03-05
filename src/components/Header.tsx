import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  margin: 50px 0 40px 0;
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.font_size_heading};
  margin-top: 60px;
`;

const Message = styled.h2`
  font-size: ${(props) => props.theme.font_size_primary};
  font-weight: ${(props) => props.theme.font_weight_subheading};
  color: ${(props) => props.theme.color_primary};
  margin-top: 10px;
`;

interface Props {
  heading: string;
  message: string;
}

const Header: React.FC<Props> = ({ heading, message }) => {
  return (
    <Div>
      <Image src="/static/logo.svg" alt="Luftio logo" width={120} height={45} />
      <Heading>{heading}</Heading>
      <Message>{message}</Message>
    </Div>
  );
};

export default Header;
