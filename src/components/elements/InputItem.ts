import styled, { css } from "styled-components";

const InputItem = styled.div<{
  expand?: boolean;
  profile?: boolean;
  fail?: boolean;
  device?: boolean;
  failDashboard?: boolean;
  modal?: boolean;
  avatar?: boolean;
}>`
  position: relative;

  > label {
    display: flex;
    font-size: ${(props) => props.theme.font_size_secondary};
    font-weight: ${(props) => props.theme.font_weight_primary};
    color: ${(props) => props.theme.color_secondary};
  }

  > p {
    position: absolute;
    left: 355px;
    bottom: 10px;
    background: transparent;
    width: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;

    @media only screen and (max-width: 970px) {
      left: 405px;
    }

    @media only screen and (max-width: 570px) {
      left: 90%;
    }
  }

  > input {
    -webkit-appearance: none;
    display: flex;
    width: 400px;
    height: 45px;
    padding: 15px;
    margin: 5px 0 15px 0;
    border: ${(props) => props.theme.border_primary};
    border-radius: ${(props) => props.theme.border_radius_primary};
    font-family: inherit;
    font-size: ${(props) => props.theme.font_size_secondary};
    position: relative;

    &:focus {
      border: ${(props) => props.theme.border_focus};
      box-shadow: ${(props) => props.theme.color_input_box_shadow};
    }

    ::placeholder {
      color: ${(props) => props.theme.color_placeholder};
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${(props) => props.theme.color_placeholder};
    }

    ::-ms-input-placeholder {
      color: ${(props) => props.theme.color_placeholder};
    }

    @media only screen and (max-width: 970px) {
      width: 450px;
    }

    @media only screen and (max-width: 570px) {
      width: 100%;
    }
  }

  ${(props) =>
    props.expand &&
    css`
      display: flex;
      align-items: center;

      > label {
        padding-bottom: 8px;
        width: 125px;
      }

      > input {
        height: 35px;
        margin: 0px 0 10px 0;
      }
    `}

  ${(props) =>
    props.profile &&
    css`
      display: flex;
      align-items: center;

      > label {
        padding-bottom: 8px;
        width: 125px;
      }

      > input {
        height: 35px;
        margin: 0px 0 10px 0;
        border: 1px solid transparent;
        pointer-events: none;
      }
    `}

    ${(props) =>
    props.fail &&
    css`
      > label {
        color: ${(props) => props.theme.color_fail};
      }
      > input {
        border: 1px solid ${(props) => props.theme.color_fail};

        &:focus {
          border: 1px solid ${(props) => props.theme.color_fail};
          box-shadow: none;
        }
      }
    `}

    ${(props) =>
    props.device &&
    css`
      > input {
        width: 175px;
        height: 35px;
      }
    `}

    ${(props) =>
    props.failDashboard &&
    css`
      > input {
        border: 1px solid ${(props) => props.theme.color_fail};

        &:focus {
          border: 1px solid ${(props) => props.theme.color_fail};
          box-shadow: none;
        }
      }
    `}

    ${(props) =>
    props.modal &&
    css`
      > input {
        width: 100%;
      }
    `}

    ${(props) =>
    props.avatar &&
    css`
      margin-bottom: 20px;
    `}
`;

export default InputItem;
