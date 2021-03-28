import styled, { css } from "styled-components";

const ThreatBar = styled.div<{ background?: string; score?: number }>`
  display: flex;
  justify-content: flex-start;
  background: #e1e6ea;
  border-radius: 10px;
  align-items: center;
  height: 10px;
  width: 120px;

  @media only screen and (max-width: 600px) {
    width: 80px;
  }

  > div {
    border-radius: 100px;
    background: ${(props) => props.background};
    height: 10px;
    width: ${(props) => props.score}%;
  }
`;

export default ThreatBar;
