import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import InputItem from "../../elements/InputItem";
import Button from "../../elements/Button";
import EmailVerifyCard from "./EmailVerifyCard";
import Success from "../../elements/Success";

const Expand = styled.form`
  display: flex;
  width: 85%;
  flex-direction: column;
  margin: -10px auto 0 auto;
  border-bottom: ${(props) => props.theme.divider};
  background: #fff;
  border-bottom: ${(props) => props.theme.divider};
  margin: -70px auto 0 auto;
  padding-bottom: 45px;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: -25px;
`;

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type Formdata = {
  name: string;
  surname: string;
  email: string;
};

const ChangePassword: React.FC<Props> = ({ onClick }) => {
  const { t } = useTranslation<string>();

  const [verifyEmail, setVerifyEmail] = useState<boolean>(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);

  const { register, handleSubmit, errors, formState } = useForm<Formdata>();
  const onSubmit = handleSubmit(({ name, surname, email }) => {
    console.log(name, surname, email);
    formState.dirtyFields.email && setVerifyEmail(true);
    !formState.dirtyFields.email && setShowSuccessMsg(true);
  });

  return (
    <Expand onSubmit={onSubmit}>
      <InputItem expand failDashboard={errors.name && true}>
        <label htmlFor="edit-name">{t("profile_expand_name")}</label>
        <input
          id="edit-name"
          type="text"
          name="name"
          defaultValue="Petr"
          ref={register({
            required: true,
          })}
        />
      </InputItem>
      <InputItem expand failDashboard={errors.surname && true}>
        <label htmlFor="edit-surname">{t("profile_expand_surname")}</label>
        <input
          id="edit-surname"
          type="text"
          name="surname"
          defaultValue="Novák"
          ref={register({
            required: true,
          })}
        />
      </InputItem>
      <InputItem expand failDashboard={errors.email && true}>
        <label htmlFor="edit-email">{t("profile_expand_email")}</label>
        <input
          id="edit-email"
          type="text"
          name="email"
          defaultValue="petr.novak@gmail.com"
          ref={register({
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
        />
      </InputItem>
      {verifyEmail && <EmailVerifyCard />}
      {showSuccessMsg && <Success>{t("profile_success")}</Success>}
      <Buttons>
        <Button type="submit" background={formState.isDirty ? "rgba(3, 25, 70, 1)" : "rgba(3, 25, 70, 0.4)"} cursor={formState.isDirty ? "auto" : "none"} savechanges>
          {t("profile_save_changes")}
        </Button>
        <Button type="button" onClick={onClick}>
          {t("profile_cancel")}
        </Button>
      </Buttons>
    </Expand>
  );
};

export default ChangePassword;