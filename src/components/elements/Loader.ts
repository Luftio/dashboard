import styled, { css } from "styled-components";

const Loader = styled.div`
  display: inner-block;
  width: 40px;
  height: 40px;

  ::after {
    content: " ";
    display: block;
    width: 54px;
    height: 54px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${(props) => props.theme.color_brand};
    border-color: ${(props) => props.theme.color_brand} transparent ${(props) => props.theme.color_brand} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
