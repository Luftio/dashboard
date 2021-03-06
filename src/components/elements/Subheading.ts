import styled from "styled-components";

export const Subheading = styled.h2`
  font-size: ${(props) => props.theme.font_size_primary};
  font-weight: ${(props) => props.theme.font_weight_subheading};
  color: ${(props) => props.theme.color_primary};
  margin-top: 10px;
`;
