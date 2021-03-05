import styled from "styled-components";

export const HaveAccount = styled.div`
  display: flex;
  align-items: center;
  > p {
    color: ${(props) => props.theme.color_secondary};
    font-size: ${(props) => props.theme.font_size_secondary};
    margin: 30px 0;
  }

  > a {
    text-decoration: underline;
    font-size: ${(props) => props.theme.font_size_secondary};
    color: ${(props) => props.theme.color_secondary};
    &:hover {
      color: ${(props) => props.theme.color_brand};
    }
  }
`;
