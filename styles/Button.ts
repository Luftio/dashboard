import styled from "styled-components";

export const Button = styled.button`
  background: #031846;
  color: white;
  border-radius: 4px;
  font-family: "Montserrat", "DejaVu Sans", Verdana, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  width: 400px;
  height: 45px;
  margin-top: 30px;
  cursor: pointer;
  display: block;

  &:hover {
    background: #06225f;
  }

  &:active {
    background: #031846;
  }

  @media only screen and (max-width: 970px) {
    width: 450px;
  }
`;
