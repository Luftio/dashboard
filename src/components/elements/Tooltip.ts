import styled, { css } from "styled-components";

const Tooltip = styled.p<{ manageUsers?: boolean }>`
  position: absolute;
  width: 170px;
  color: #fff;
  background-color: ${(props) => props.theme.color_tooltip_primary};
  padding: 3px 5px;
  font-size: ${(props) => props.theme.font_size_tooltip};
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.6);
  left: 130px;
  bottom: 7px;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 40%;
    left: -7px;
    border: 0.4rem solid transparent;
    border-top: none;
    transform: rotate(-90deg);
    border-bottom-color: ${(props) => props.theme.color_tooltip_primary};
    filter: drop-shadow(0 -0.2px 1px rgba(0, 0, 0, 0.2));
  }

  ${(props) =>
    props.manageUsers &&
    css`
      width: 220px;
      padding: 10px 20px;
      text-align: left;
      left: -99px;
      bottom: -150px;

      &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        bottom: 100%;
        left: 100px;
        border: 0.4rem solid transparent;
        border-top: none;
        transform: rotate(0deg);
        border-bottom-color: ${(props) => props.theme.color_tooltip_primary};
        filter: drop-shadow(0 -0.2px 1px rgba(0, 0, 0, 0.2));
      }

      > span {
        font-weight: ${(props) => props.theme.font_weight_primary};
        font-size: ${(props) => props.theme.font_size_tooltip};
        display: block;
      }
    `}
`;

export default Tooltip;
