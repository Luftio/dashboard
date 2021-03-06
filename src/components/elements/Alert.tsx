import React from "react";
import styled from "styled-components";

import { Icon } from "ts-react-feather-icons";

const AlertSign = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.color_alert};
  box-shadow: ${(props) => props.theme.color_alert_box_shadow};
  border-radius: ${(props) => props.theme.border_radius_primary};
  padding: 15px;
  margin-bottom: 30px;

  > p {
    color: ${(props) => props.theme.color_alert_text};
    font-size: ${(props) => props.theme.font_size_secondary};
    font-weight: ${(props) => props.theme.font_weight_primary};
    margin-left: 10px;
  }
`;

interface Props {
  alertText: string;
}

const Alert: React.FC<Props> = ({ alertText }) => {
  return (
    <AlertSign>
      <Icon name="alert-triangle" color="#fff" />
      <p>{alertText}</p>
    </AlertSign>
  );
};

export default Alert;
