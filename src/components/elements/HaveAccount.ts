import styled from "styled-components";

const HaveAccount = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;

  > p {
    color: ${(props) => props.theme.color_secondary};
    font-size: ${(props) => props.theme.font_size_secondary};
  }

  > a {
    text-decoration: underline;
    font-size: ${(props) => props.theme.font_size_secondary};
    color: ${(props) => props.theme.color_secondary};
    &:hover {
      color: ${(props) => props.theme.color_brand};
      transition: ${(props) => props.theme.transition_primary};
    }
  }
`;

export default HaveAccount;
