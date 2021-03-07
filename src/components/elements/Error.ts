import styled from "styled-components";

const Error = styled.p`
  color: ${(props) => props.theme.color_error_msg};
  font-size: ${(props) => props.theme.font_size_secondary};
  margin-bottom: 15px;
`;

export default Error;
