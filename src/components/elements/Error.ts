import styled from "styled-components";

const Error = styled.p<{ dashboard?: boolean }>`
  color: ${(props) => props.theme.color_fail};
  font-size: ${(props) => props.theme.font_size_secondary};
  margin-bottom: 15px;
`;

export default Error;
