import React from "react";
import styled from "styled-components";

import BasicText from "../elements/BasicText";
import Subheading from "../elements/Subheading";

const Card = styled.div`
  border: ${(props) => props.theme.border_primary};
  border-radius: ${(props) => props.theme.border_radius_primary};
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-top: 20px;
`;

interface DeviceCardProps {
  nameDevice?: string;
  label: string;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ nameDevice, label }) => {
  return (
    <Card>
      <Subheading device>{nameDevice}</Subheading>
      <BasicText>{label}</BasicText>
    </Card>
  );
};

export default DeviceCard;
