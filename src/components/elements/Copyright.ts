import styled from "styled-components";

const Copyright = styled.p`
  color: #fff;
  font-size: ${(props) => props.theme.font_size_secondary};
  padding-bottom: 20px;
  position: absolute;
  bottom: 20px;

  @media only screen and (max-width: 970px) {
    position: relative;
    top: 100px;
  }
`;

export default Copyright;
