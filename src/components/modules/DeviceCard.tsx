import React from "react";
import styled from "styled-components";
import BasicText from "../elements/BasicText";
import InputItem from "../elements/InputItem";
import Subheading from "../elements/Subheading";

const Card = styled.div`
  border: ${(props) => props.theme.border_primary};
  border-radius: ${(props) => props.theme.border_radius_primary};
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

interface Props {
  name: string;
  label: string;
  edit: boolean;
  onChange: (e: any) => void;
}

const DeviceCard: React.FC<Props> = ({ name, label, edit, onChange }) => {
  return (
    <Card>
      {edit ? (
        <InputItem device>
          <input type="text" value={name} onChange={onChange} />
        </InputItem>
      ) : (
        <Subheading device>{name}</Subheading>
      )}
      <BasicText>{label}</BasicText>
    </Card>
  );
};

export default DeviceCard;
