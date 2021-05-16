import styled, { css } from "styled-components";

const SelectItem = styled.div<{ isPending?: boolean; modal?: boolean }>`
  margin-right: 6%;
  cursor: pointer;

  > select {
    border: none;
    cursor: pointer;
    width: 90px;
    font-weight: 400;
    font-family: inherit;
    font-size: 14px;
    background-color: transparent;
  }

  ${(props) =>
    props.modal &&
    css`
      width: 100%;

      > label {
        display: flex;
        font-size: ${(props) => props.theme.font_size_secondary};
        font-weight: ${(props) => props.theme.font_weight_primary};
        color: ${(props) => props.theme.color_secondary};
      }

      > select {
        display: flex;
        width: 100%;
        cursor: pointer;
        border: ${(props) => props.theme.border_primary};
        border-radius: ${(props) => props.theme.border_radius_primary};
        padding: 11.5px 15px;
        margin: 5px 0 15px 0;

        &:focus {
          border: ${(props) => props.theme.border_focus};
          box-shadow: ${(props) => props.theme.color_input_box_shadow};
        }
      }
    `}

  ${(props) =>
    props.isPending &&
    css`
      pointer-events: none;
      cursor: text;

      > select {
        color: ${(props) => props.theme.color_date};
      }
    `}
`;

export default SelectItem;
