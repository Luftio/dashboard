import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Heading from "../elements/Heading";
import Subheading from "../elements/Subheading";

const Div = styled.div`
  margin: 50px 0 40px 0;
  width: 100%;
`;

interface Props {
  heading: string;
  subheading: string;
}

const Header: React.FC<Props> = ({ heading, subheading }) => {
  return (
    <Div>
      <Image src="/static/logo.svg" alt="Luftio logo" width={120} height={45} />
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
    </Div>
  );
};

export default Header;
