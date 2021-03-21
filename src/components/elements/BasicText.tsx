import styled, { css } from "styled-components";

const BasicText = styled.p<{ date?: boolean; name?: boolean; procents?: boolean; color?: string; emptystate?: boolean; events?: boolean; bottomRowProcents?: boolean; bottomRowProcentsName?: boolean; procentsDashboard?: boolean; verifyEmail?: boolean; notifications?: boolean }>`
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
    props.verifyEmail &&
    css`
      font-weight: ${(props) => props.theme.font_weight_primary};
      padding-bottom: 10px;
    `}

    ${(props) =>
    props.procents &&
    css`
      font-weight: ${(props) => props.theme.font_weight_secondary};
      font-size: ${(props) => props.theme.font_size_primary};
      color: ${(props) => props.color};
    `}

    ${(props) =>
    props.procentsDashboard &&
    css`
      font-weight: ${(props) => props.theme.font_weight_primary};
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

    ${(props) =>
    props.events &&
    css`
      color: ${(props) => props.theme.color_primary};
      margin: 0 20px 0 8px;
    `}

    ${(props) =>
    props.bottomRowProcents &&
    css`
      font-size: ${(props) => props.theme.font_size_primary};
      color: ${(props) => props.color};
    `}

    ${(props) =>
    props.bottomRowProcentsName &&
    css`
      color: ${(props) => props.theme.color_primary};
    `}

    ${(props) =>
    props.notifications &&
    css`
      display: flex;
      flex: 1;
    `}
`;

export default BasicText;
