import React from "react";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import SelectItem from "../../elements/SelectItem";
import InputItem from "../../elements/InputItem";
import Error from "../../elements/Error";
import BasicText from "../../elements/BasicText";
import Button from "../../elements/Button";

import { useForm } from "react-hook-form";
import { mutate, refetch } from "../../../gqless";

const Form = styled.form`
  margin-top: 20px;
`;

export interface InviteUserFormProps {
  handleClose: () => void;
  handleRefetch: () => void;
}

interface Formdata {
  email: string;
  role: string;
}

export const InviteUserForm: React.FC<InviteUserFormProps> = ({ handleClose, handleRefetch }) => {
  const { t } = useTranslation<string>();

  const { register, handleSubmit, errors } = useForm<Formdata>({ mode: "onSubmit" });
  const onSubmit = handleSubmit(({ email, role }) => {
    console.log(email, role);
    mutate((mutation) => mutation.inviteUser({ email, role })).then(() => {
      handleRefetch();
    });
    handleClose();
  });

  return (
    <>
      <BasicText>{t("manage_users_modal_add_text")}</BasicText>
      <Form onSubmit={onSubmit}>
        <InputItem modal>
          <label htmlFor="email">{t("email_input_label")}</label>
          <input
            id="email"
            type="text"
            placeholder={t("email_input_placeholder")}
            name="email"
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
        </InputItem>
        {errors.email && errors.email.type === "required" && <Error>{t("msg_required")}</Error>}
        {errors.email && errors.email.type === "pattern" && <Error>{t("msg_invalid_email")}</Error>}
        <SelectItem modal>
          <label htmlFor="role">Role</label>
          <select name="role" ref={register}>
            <option value="user">{t("manage_users_user_heading")}</option>
            <option value="manager">{t("manage_users_manager_heading")}</option>
          </select>
        </SelectItem>
        <Button modal type="submit">
          {t("manage_users_add")}
        </Button>
      </Form>
    </>
  );
};

export default InviteUserForm;
