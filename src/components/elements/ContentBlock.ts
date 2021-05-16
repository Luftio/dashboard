import styled from "styled-components";

const ContentBlock = styled.div`
  background: #fff;
  width: 95%;
  border-radius: ${(props) => props.theme.border_radius_primary};
  box-shadow: ${(props) => props.theme.color_block_box_shadow};
  padding: 30px 0 40px;
  margin-bottom: 20px;
`;

export default ContentBlock;
