import styled from "styled-components";

const ShimmerItem = styled.div<{ width?: number; marginBottom?: number }>`
  width: ${(props) => props.width}%;
  height: 24px;
  border-radius: ${(props) => props.theme.border_radius_primary};
  margin-bottom: ${(props) => props.marginBottom}px;
  position: relative;
`;

export default ShimmerItem;
