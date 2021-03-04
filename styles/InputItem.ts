import styled from "styled-components";

export const InputItem = styled.div`
  > label {
    display: flex;
    font-size: 0.875rem;
    font-weight: 500;
    color: #afb8bf;
  }

  > input {
    display: flex;
    width: 400px;
    height: 45px;
    padding: 15px;
    margin: 5px 0 15px 0;
    border: 1px solid #e1e6ea;
    border-radius: 4px;
    font-family: "Montserrat", "DejaVu Sans", Verdana, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;

    &:focus {
      border: 1px solid rgba(3, 24, 70, 0.6);
      box-shadow: 0px 0px 2px rgba(3, 24, 70, 0.3);
    }

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

    @media only screen and (max-width: 970px) {
      width: 450px;
    }
  }
`;
