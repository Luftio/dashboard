import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../../elements/Button";
import InputItem from "../../elements/InputItem";

import { useQuery, useMutation } from "../../../gqless";

const Expand = styled.form`
  display: flex;
  width: 85%;
  flex-direction: column;
  margin: -10px auto 0 auto;
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
  handleClose?: () => void;
}

type Formdata = {
  deviceTitles: Record<string, string>;
};

const DevicesForm: React.FC<DevicesFormProps> = ({ handleClose, edit }) => {
  const { t } = useTranslation<string>();

  const query = useQuery();
  const [renameDevice] = useMutation(
    (mutation, args: { id: string; title: string }) => {
      return mutation.renameDevice({ input: args });
    },
    {
      onError: (error) => {
        console.error(error);
      },
    },
  );

  const manageDevices = query.devices;
  const { register, handleSubmit, formState } = useForm<Formdata>({
    defaultValues: { deviceTitles: Object.fromEntries(manageDevices.map((it) => [it.id, it.title])) },
  });
  const onSubmit = useMemo(
    () =>
      handleSubmit(async ({ deviceTitles }) => {
        console.log(deviceTitles);
        for (const device of manageDevices) {
          if (device.id == null) continue;
          const title = deviceTitles[device.id];
          if (title && title != device.title) {
            console.log("renaming device", { id: device.id, title });
            const response = await renameDevice({ args: { id: device.id, title } });
            console.log(response.title);
          }
        }
        if (handleClose) handleClose();
      }),
    [manageDevices],
  );

  return (
    <Expand onSubmit={onSubmit}>
      <Cards>
        {manageDevices?.map((device) => (
          <Card key={device.id}>
            <InputItem device>
              <input
                type="text"
                name={"deviceTitles." + device.id}
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
          <Button type="button" onClick={handleClose}>
            {t("profile_cancel")}
          </Button>
        </Buttons>
      )}
    </Expand>
  );
};

export default DevicesForm;
