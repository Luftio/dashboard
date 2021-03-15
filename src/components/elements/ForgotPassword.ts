import styled from "styled-components";

const ForgotPassword = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.color_secondary};
  font-size: ${(props) => props.theme.font_size_secondary};
  text-decoration: underline;
  cursor: pointer;
  position: relative;
  top: -8px;

  &:hover {
    color: ${(props) => props.theme.color_brand};
    transition: ${(props) => props.theme.transition_primary};
  }
`;

export default ForgotPassword;
