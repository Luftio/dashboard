import styled, { css } from "styled-components";

const Subheading = styled.h2<{ afterAction?: boolean; dashboard?: boolean; device?: boolean }>`
  font-size: ${(props) => props.theme.font_size_primary};
  font-weight: ${(props) => props.theme.font_weight_subheading};
  color: ${(props) => props.theme.color_primary};
  margin-top: 10px;

  ${(props) =>
    props.afterAction &&
    css`
      color: #fff;
      margin-bottom: 150px;
      padding-right: 70px;

      @media only screen and (max-width: 970px) {
        margin-bottom: 80px;
      }
    `}

  ${(props) =>
    props.dashboard &&
    css`
      font-size: ${(props) => props.theme.font_size_dashboard_subheading};
      color:  ${(props) => props.theme.color_dashboard_subheading};
      margin: 0;
      }
    `}

    ${(props) =>
    props.device &&
    css`
      margin: 0 0 10px 0;
      }
    `}
`;

export default Subheading;
