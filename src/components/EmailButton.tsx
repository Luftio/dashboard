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
  font-weight: ${(props) => props.theme.font_weight_secondary};
  font-size: ${(props) => props.theme.font_size_secondary};
  color: ${(props) => props.theme.color_secondary};
  height: 45px;
  border: ${(props) => props.theme.border_primary};
  border-radius: ${(props) => props.theme.border_radius_primary};
  text-decoration: none;

  &:hover {
    background: ${(props) => props.theme.color_button_hover};
  }

  &:active {
    background: ${(props) => props.theme.color_button_active};
    border: ${(props) => props.theme.border_active};
  }
`;

interface Props {
  text: string;
  imageUrl: string;
  href: string;
  altText: string;
}

const EmailButton: React.FC<Props> = ({ text, imageUrl, href, altText }) => {
  return (
    <Div>
      <Link href={href}>
        <Button href={href}>
          <Image src={imageUrl} alt={altText} width={21} height={29} />
          &nbsp;&nbsp;&nbsp;{text}
        </Button>
      </Link>
    </Div>
  );
};

export default EmailButton;
