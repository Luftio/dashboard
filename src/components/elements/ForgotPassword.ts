import styled from "styled-components";

const ForgotPassword = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.color_secondary};
  font-size: ${(props) => props.theme.font_size_secondary};
  text-decoration: underline;
  cursor: pointer;
  position: relative;
  left: 280px;
  top: -8px;

  &:hover {
    color: ${(props) => props.theme.color_brand};
    transition: ${(props) => props.theme.transition_primary};
  }

  @media only screen and (max-width: 970px) {
    left: 330px;
  }
`;

export default ForgotPassword;
