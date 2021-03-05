import styled from "styled-components";

export const Button = styled.button`
  display: block;
  background: ${(props) => props.theme.color_brand};
  color: #fff;
  border-radius: ${(props) => props.theme.border_radius_primary};
  font-family: inherit;
  font-size: ${(props) => props.theme.font_size_primary};
  font-weight: ${(props) => props.theme.font_weight_secondary};
  border: none;
  width: 400px;
  height: 45px;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.color_brand_hover};
  }

  &:active {
    background: ${(props) => props.theme.color_brand};
  }

  @media only screen and (max-width: 970px) {
    width: 450px;
  }
`;
