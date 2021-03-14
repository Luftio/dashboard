import styled from "styled-components";

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  > input {
    opacity: 0;
  }

  > label {
    color: ${(props) => props.theme.color_secondary};
    font-size: ${(props) => props.theme.font_size_secondary};
    margin: 0 0 0 15px;
    position: relative;

    &::after {
      content: "";
      border: ${(props) => props.theme.border_primary};
      border-radius: ${(props) => props.theme.border_radius_checkbox};
      width: 17px;
      height: 17px;
      position: absolute;
      left: -27px;
    }
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
