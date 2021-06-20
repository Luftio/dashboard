import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../elements/Button";
import InputItem from "../elements/InputItem";

import { useQuery } from "../../gqless";

const Expand = styled.form`
  display: flex;
  width: 85%;
  flex-direction: column;
  margin: -10px auto 0 auto;
  border-bottom: ${(props) => props.theme.divider};
  background: #fff;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border: ${(props) => props.theme.border_primary};
  border-radius: ${(props) => props.theme.border_radius_primary};
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const DeviceLabel = styled.label`
  font-size: ${(props) => props.theme.font_size_secondary};
`;

interface DevicesFormProps {
  edit: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type Formdata = {
  device1: string;
  device2: string;
  device3: string;
};

const DevicesForm: React.FC<DevicesFormProps> = ({ onClick, edit }) => {
  const { t } = useTranslation<string>();

  const { register, handleSubmit, formState } = useForm<Formdata>();
  const onSubmit = handleSubmit(({ device1, device2, device3 }) => {
    console.log(device1, device2, device3);
  });

  const query = useQuery();
  const manageDevices = query.manageDevices({ id: "1" });

  return (
    <Expand onSubmit={onSubmit}>
      <Cards>
        {manageDevices?.map((device) => (
          <Card key={device.id}>
            <InputItem device>
              <input
                value={device.title}
                type="text"
                id="device1"
                name="device1"
                ref={register({
                  required: true,
                })}
              />
            </InputItem>
            <DeviceLabel htmlFor={`device${device.id}`}>{device.label}</DeviceLabel>
          </Card>
        ))}
      </Cards>
      {edit && (
        <Buttons>
          <Button
            type="submit"
            background={formState.isDirty ? "rgba(3, 25, 70, 1)" : "rgba(3, 25, 70, 0.4)"}
            cursor={formState.isDirty ? "auto" : "none"}
            savechanges>
            {t("profile_save_changes")}
          </Button>
          <Button type="button" onClick={onClick}>
            {t("profile_cancel")}
          </Button>
        </Buttons>
      )}
    </Expand>
  );
};

export default DevicesForm;
