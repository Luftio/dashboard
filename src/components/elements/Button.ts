import styled, { css } from "styled-components";

const Button = styled.button<{ primary?: boolean; email?: boolean; signout?: boolean }>`
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

  &:hover {
    background: ${(props) => props.theme.color_button_hover};
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

      &:hover {
        background: ${(props) => props.theme.color_brand_hover};
      }

      &:active {
        background: ${(props) => props.theme.color_brand};
      }

      @media only screen and (max-width: 970px) {
        width: 450px;
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
        transition: all 0.3s linear;
      }

      &:active {
        background: ${(props) => props.theme.color_button_active};
        border: 2px solid #ffffff;
        background: rgba(255, 255, 255, 0.4);
      }
    `}
`;

export default Button;
