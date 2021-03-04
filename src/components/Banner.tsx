import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex: 0.4;
  justify-content: center;
  background-color: #031846;

  @media only screen and (max-width: 1250px) {
    flex: 0.2;
  }

  @media only screen and (max-width: 970px) {
    display: none;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1250px) {
    display: none;
  }
`;

const Banner: React.FC = () => {
  return (
    <Div>
      <ImageDiv>
        <Image
          src="/static/smart-buildings.svg"
          alt="Luftio logo"
          width={404}
          height={542}
        />
      </ImageDiv>
    </Div>
  );
};

export default Banner;
