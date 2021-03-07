import styled from "styled-components";

const InputItem = styled.div`
  > label {
    display: flex;
    font-size: ${(props) => props.theme.font_size_secondary};
    font-weight: ${(props) => props.theme.font_weight_primary};
    color: ${(props) => props.theme.color_secondary};
  }

  > p {
    position: absolute;
    margin: -47px 0 0 357px;
    background: #fff;
    width: 30px;
    display: flex;
    justify-content: center;
  }

  > input {
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
  }
`;

export default InputItem;
