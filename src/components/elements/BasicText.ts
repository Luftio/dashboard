import styled, { css } from "styled-components";

const BasicText = styled.p<{
  date?: boolean;
  name?: boolean;
  procents?: boolean;
  color?: string;
  emptystate?: boolean;
  emptycard?: boolean;
  events?: boolean;
  bottomRowProcents?: boolean;
  bottomRowProcentsName?: boolean;
  procentsDashboard?: boolean;
  verifyEmail?: boolean;
  notifications?: boolean;
  contentBlockItem?: boolean;
  dateDashboard?: boolean;
  select?: boolean;
  onboarding?: boolean;
  onboardingItem?: boolean;
  onboardingItemResult?: boolean;
  manageUsers?: boolean;
  manageUsersEmail?: boolean;
  tag?: boolean;
  integrationTitle?: boolean;
  welcomeModalHeading?: boolean;
  successCheck?: boolean;
}>`
  font-size: ${(props) => props.theme.font_size_secondary};

  ${(props) =>
    props.date &&
    css`
      color: ${(props) => props.theme.color_date};

      @media only screen and (max-width: 850px) {
        display: none;
      }
    `}

  ${(props) =>
    props.dateDashboard &&
    css`
      color: ${(props) => props.theme.color_date};
    `}

  ${(props) =>
    props.name &&
    css`
      font-weight: ${(props) => props.theme.font_weight_primary};
      flex: 0.5;
      margin-right: 10px;

      @media only screen and (max-width: 850px) {
        flex: initial;
      }
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
      text-align: center;
      color: ${(props) => props.theme.color_primary};
      position: relative;
      bottom: 30px;
    `}

    ${(props) =>
    props.emptycard &&
    css`
      font-size: ${(props) => props.theme.font_size_secondary};
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

    ${(props) =>
    props.contentBlockItem &&
    css`
      padding-bottom: 50px;
    `}

    ${(props) =>
    props.select &&
    css`
      font-size: ${(props) => props.theme.font_size_secondary};
      color: ${(props) => props.color};
      text-align: center;
      margin-top: 3px;
    `}

    ${(props) =>
    props.onboardingItem &&
    css`
      font-size: ${(props) => props.theme.font_size_primary};
      margin-top: 20px;
      margin-bottom: 19.2px;
    `}

    ${(props) =>
    props.onboardingItemResult &&
    css`
      font-weight: ${(props) => props.theme.font_weight_primary};
      color: ${(props) => props.theme.color_secondary};

      @media only screen and (max-width: 1340px) {
        margin-bottom: 15px;
        text-align: left;
      }
    `}

    ${(props) =>
    props.manageUsers &&
    css`
      display: flex;
      width: 31%;
      font-weight: ${(props) => props.theme.font_weight_primary};
      color: ${(props) => props.theme.color_secondary};

      @media only screen and (max-width: 1075px) {
        width: 50%;
      }

      @media only screen and (max-width: 700px) {
        width: 31%;
      }

      &:last-of-type {
        flex: 0;
        padding-right: 6px;
        position: relative;
      }
    `}

    ${(props) =>
    props.manageUsersEmail &&
    css`
      display: flex;
      width: 31%;
      font-weight: ${(props) => props.theme.font_weight_primary};
      color: ${(props) => props.theme.color_secondary};

      @media only screen and (max-width: 1075px) {
        display: none;
      }
    `}

    ${(props) =>
    props.tag &&
    css`
      color: #fff;
      font-size: ${(props) => props.theme.font_size_tag};
    `}

    ${(props) =>
    props.integrationTitle &&
    css`
      font-weight: ${(props) => props.theme.font_weight_primary};
      font-size: ${(props) => props.theme.font_size_primary};
      margin-right: 65px;
    `}

    ${(props) =>
    props.welcomeModalHeading &&
    css`
      font-weight: ${(props) => props.theme.font_weight_primary};
      font-size: ${(props) => props.theme.font_size_primary};
      margin-bottom: 25px;
    `}

    ${(props) =>
    props.successCheck &&
    css`
      font-weight: ${(props) => props.theme.font_weight_primary};
      font-size: ${(props) => props.theme.font_size_primary};
      text-align: center;
    `}
`;

export default BasicText;
