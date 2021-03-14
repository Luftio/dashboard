import styled, { css } from "styled-components";

const BasicText = styled.p<{ date?: boolean; name?: boolean; procents?: boolean; color?: string; emptystate?: boolean }>`
  font-size: ${(props) => props.theme.font_size_secondary};

  ${(props) =>
    props.date &&
    css`
      color: ${(props) => props.theme.color_date};
    `}

  ${(props) =>
    props.name &&
    css`
      font-weight: ${(props) => props.theme.font_weight_primary};
      flex: 0.5;
    `}

    ${(props) =>
    props.procents &&
    css`
      font-weight: ${(props) => props.theme.font_weight_secondary};
      font-size: ${(props) => props.theme.font_size_primary};
      color: ${(props) => props.color};
    `}

    ${(props) =>
    props.emptystate &&
    css`
      font-size: ${(props) => props.theme.font_size_sidebar_heading};
      font-size: ${(props) => props.theme.font_weight_secondary};
      text-align: center;
      color: ${(props) => props.theme.color_primary};
      position: relative;
      bottom: 30px;
    `}
`;

export default BasicText;
