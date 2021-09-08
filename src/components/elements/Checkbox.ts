import styled from "styled-components";

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  input {
    position: relative;
    width: 16px;
    height: 16px;
    border: ${(props) => props.theme.border_primary};
    border-radius: ${(props) => props.theme.border_radius_checkbox};
    appearance: none;
    cursor: pointer;
    transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);

    &::before {
      position: absolute;
      content: "";
      display: block;
      top: 2px;
      left: 4.9px;
      width: 5px;
      height: 8px;
      border-style: solid;
      border-color: #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
    }
    &:checked {
      color: #fff;
      border-color: ${(props) => props.theme.color_brand};
      background: ${(props) => props.theme.color_brand};

      &::before {
        opacity: 1;
      }
    }
  }

  > label {
    color: ${(props) => props.theme.color_secondary};
    font-size: ${(props) => props.theme.font_size_secondary};
    margin: 0 0 0 7px;
    position: relative;
  }

  > a {
    color: ${(props) => props.theme.color_secondary};
    font-size: ${(props) => props.theme.font_size_secondary};
    text-decoration: underline;

    &:hover {
      color: ${(props) => props.theme.color_brand};
      transition: ${(props) => props.theme.transition_primary};
    }
  }
`;

export default Checkbox;
