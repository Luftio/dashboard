import React, { useEffect } from "react";
import styled from "styled-components";

const eva = require("eva-icons");

const AlertSign = styled.div`
  display: flex;
  align-items: center;
  background: #dd5854;
  box-shadow: 0px 4px 8px rgba(221, 88, 84, 0.3);
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 30px;

  > p {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    margin-left: 10px;
  }
`;

interface Props {
  alertText: string;
}

const Alert: React.FC<Props> = ({ alertText }) => {
  useEffect(() => {
    eva.replace();
  }, []);

  return (
    <AlertSign>
      <i data-eva="alert-triangle-outline" data-eva-fill="#fff"></i>
      <p>{alertText}</p>
    </AlertSign>
  );
};

export default Alert;
