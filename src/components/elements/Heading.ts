import styled, { css } from "styled-components";

const Heading = styled.h1<{ sidebar?: boolean; afterAction?: boolean; dashboard?: boolean }>`
  font-size: ${(props) => props.theme.font_size_heading};
  margin-top: 60px;

  ${(props) =>
    props.sidebar &&
    css`
      margin: 40px 0 15px 13%;
      font-weight: ${(props) => props.theme.font_weight_secondary};
      font-size: ${(props) => props.theme.font_size_sidebar_heading};
    `}

  ${(props) =>
    props.afterAction &&
    css`
      color: #fff;
      margin: 100px 0 40px 0;
      padding-right: 70px;

      @media only screen and (max-width: 970px) {
        margin: 60px 0 20px 0;
      }
    `}

    ${(props) =>
    props.dashboard &&
    css`
      margin: 0 0 30px 0;
      width: 100%;
    `}
`;

export default Heading;
