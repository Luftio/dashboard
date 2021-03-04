import styled from "styled-components";

export const HaveAccount = styled.div`
  display: flex;
  align-items: center;
  > p {
    color: #afb8bf;
    font-size: 0.875rem;
    margin: 30px 0 30px 0;
  }

  > a {
    text-decoration: underline;
    font-size: 0.875rem;
    color: #afb8bf;
    &:hover {
      color: #031846;
    }
  }
`;
