import styled from "styled-components";

export const Password = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #e1e6ea;
  width: 400px;
  height: 45px;
  margin: 5px 0 20px 0;

  @media only screen and (max-width: 970px) {
    width: 450px;
  }

  > input {
    color: #000;
    font-family: "Montserrat", "DejaVu Sans", Verdana, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    width: 100%;
    padding-left: 15px;
    border: 0;

    ::placeholder {
      color: #e1e6ea;
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: #e1e6ea;
    }

    ::-ms-input-placeholder {
      color: #e1e6ea;
    }
  }

  > p {
    margin-right: 15px;
    margin-top: 5px;
    cursor: pointer;
  }
`;

export const PasswordLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #afb8bf;
`;
