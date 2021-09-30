import styled, { css } from "styled-components";

const Button = styled.button<{
  primary?: boolean;
  email?: boolean;
  signout?: boolean;
  opacity?: false | string;
  savechanges?: boolean;
  background?: any;
  cursor?: string | false | undefined;
  nav?: boolean;
  active?: boolean;
  modal?: boolean;
  welcomeModal?: boolean;
  dashboardModal?: boolean;
  dashboardCustom?: boolean;
  dashboardModalActive?: boolean;
}>`
  font-family: inherit;
  border: none;
  cursor: pointer;
  border: ${(props) => props.theme.border_primary};
  border-radius: ${(props) => props.theme.border_radius_primary};
  background: #fff;
  font-weight: ${(props) => props.theme.font_weight_secondary};
  font-size: ${(props) => props.theme.font_size_secondary};
  color: ${(props) => props.theme.color_secondary};
  padding: 10px 25px;
  opacity: ${(props) => props.opacity || 1};
  pointer-events: ${(props) => props.cursor};

  &:hover {
    background: ${(props) => props.theme.color_button_hover};
    pointer-events: ${(props) => props.cursor};
    transition: ${(props) => props.theme.transition_primary};
  }

  &:active {
    background: ${(props) => props.theme.color_button_active};
    border: ${(props) => props.theme.border_active};
  }

  ${(props) =>
    props.primary &&
    css`
      background: ${(props) => props.theme.color_brand};
      display: block;
      font-size: ${(props) => props.theme.font_size_primary};
      width: 400px;
      height: 45px;
      margin-top: 30px;
      color: #fff;
      border: none;

      &:hover {
        background: ${(props) => props.theme.color_brand_hover};
        transition: ${(props) => props.theme.transition_primary};
      }

      &:active {
        background: ${(props) => props.theme.color_brand};
        border: none;
      }

      @media only screen and (max-width: 970px) {
        width: 450px;
      }

      @media only screen and (max-width: 570px) {
        width: 100%;
      }
    `}

  ${(props) =>
    props.modal &&
    css`
      background: ${(props) => props.theme.color_brand};
      display: block;
      font-size: ${(props) => props.theme.font_size_primary};
      width: 100%;
      height: 45px;
      margin-top: 30px;
      color: #fff;
      border: none;

      &:hover {
        background: ${(props) => props.theme.color_brand_hover};
        transition: ${(props) => props.theme.transition_primary};
      }

      &:active {
        background: ${(props) => props.theme.color_brand};
        border: none;
      }
    `}

  ${(props) =>
    props.email &&
    css`
      display: flex;
      align-items: center;
      padding: 0 20px;
      margin: 0 20px 15px 0;
      height: 45px;

      &:hover {
        background: ${(props) => props.theme.color_button_hover};
        transition: ${(props) => props.theme.transition_primary};
      }

      &:active {
        background: ${(props) => props.theme.color_button_active};
        border: ${(props) => props.theme.border_active};
      }
    `}

  ${(props) =>
    props.signout &&
    css`
      background: rgba(255, 255, 255, 0.4);
      border: 2px solid #ffffff;
      border-radius: ${(props) => props.theme.border_radius_secondary};
      font-size: ${(props) => props.theme.font_size_primary};
      color: #ffffff;
      width: 200px;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
        transition: ${(props) => props.theme.transition_primary};
      }

      &:active {
        background: ${(props) => props.theme.color_button_active};
        border: 2px solid #ffffff;
        background: rgba(255, 255, 255, 0.4);
      }
    `}

    ${(props) =>
    props.savechanges &&
    css`
      background-color: ${(props) => props.theme.color_brand};
      background: ${(props) => props.background};
      pointer-events: ${(props) => props.cursor};
      color: #fff;
      margin-right: 20px;
      border: none;

      &:hover {
        background-color: ${(props) => props.theme.color_brand_hover};
        background: ${(props) => props.background};
        pointer-events: ${(props) => props.cursor};
        transition: ${(props) => props.theme.transition_primary};
      }

      &:active {
        background: ${(props) => props.theme.color_brand};
        border: none;
      }
    `}

    ${(props) =>
    props.nav &&
    css`
      display: flex;
      align-items: center;
      padding: 5px 30px;
      margin: 0 20px 10px 0;
      height: 45px;
      font-weight: ${(props) => props.theme.font_weight_primary};
      border: none;
      color: ${(props) => props.theme.color_primary};
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
      white-space: nowrap;

      &:hover {
        transition: ${(props) => props.theme.transition_primary};
        border: none;
        background: #fff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
      }

      &:active {
        border: none;
        background: #fff;
      }
    `}

    ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.color_brand};
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
      position: relative;
      bottom: 3px;

      &:hover {
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
      }
    `}

    ${(props) =>
    props.welcomeModal &&
    css`
      background: ${(props) => props.theme.color_brand};
      color: #fff;
      border: none;
      position: relative;
      left: 70px;
      margin-top: 20px;

      &:hover {
        background: ${(props) => props.theme.color_brand_hover};
        transition: ${(props) => props.theme.transition_primary};
      }

      &:active {
        background: ${(props) => props.theme.color_brand};
        border: none;
      }
    `}

    ${(props) =>
    props.dashboardModal &&
    css`
      margin-right: 20px;
      margin-bottom: 10px;
      white-space: nowrap;

      &:active {
        border: ${(props) => props.theme.border_primary};
        background: ${(props) => props.theme.color_button_hover};
        position: relative;
        top: 1px;
      }
    `}

    ${(props) =>
    props.dashboardCustom &&
    css`
      @media only screen and (max-width: 1000px) {
        display: none;
      }
    `}

    ${(props) =>
    props.dashboardModalActive &&
    css`
      border: 1px solid ${(props) => props.theme.color_brand};
      color: ${(props) => props.theme.color_brand};

      &:hover {
        background: ${(props) => props.theme.color_brand_hover_light};
        transition: ${(props) => props.theme.transition_primary};
      }

      &:active {
        border: 1px solid ${(props) => props.theme.color_brand};
        background: ${(props) => props.theme.color_brand_hover_light};
        position: relative;
        top: 1px;
      }
    `}
`;

export default Button;
