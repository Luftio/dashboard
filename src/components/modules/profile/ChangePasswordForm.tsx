import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import InputItem from "../../elements/InputItem";
import Button from "../../elements/Button";
import Success from "../../elements/Success";
import Error from "../../elements/Error";
import { mutate } from "../../../gqless";

const Expand = styled.form`
  display: flex;
  width: 85%;
  flex-direction: column;
  margin: -10px auto 0 auto;
  // border-bottom: ${(props) => props.theme.divider};
  background: #fff;
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

interface ChangePasswordProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type Formdata = {
  password: string;
  newPassword: string;
  repeatNewPassword: string;
};

const ChangePassword: React.FC<ChangePasswordProps> = ({ onClick }) => {
  const { t } = useTranslation<string>();

  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);
  const [showErrorMsg, setShowErrorMsg] = useState<string>();

  const { register, handleSubmit, errors, formState, reset, watch } = useForm<Formdata>();
  const onSubmit = handleSubmit(({ password, newPassword, repeatNewPassword }) => {
    mutate((mutation) => mutation.changePassword({ currentPassword: password, newPassword }))
      .then(() => {
        setShowSuccessMsg(true);
      })
      .catch((error) => {
        console.log(error);
        if (error.message == 'Unexpected error value: "invalid_password"')
          setShowErrorMsg(t("profile_expand_password_incorrect"));
        else setShowErrorMsg(error.message);
      });
    reset();
  });

  const newPassword = useRef({});
  newPassword.current = watch("newPassword", "");

  return (
    <Expand onSubmit={onSubmit}>
      <InputItem expand failDashboard={errors.password && true}>
        <label htmlFor="current-password">{t("profile_expand_password_current")}</label>
        <input
          id="current-password"
          type="password"
          autoComplete="current-password"
          placeholder={t("profile_expand_password_current_placeholder")}
          name="password"
          ref={register({
            required: true,
          })}
        />
      </InputItem>
      <InputItem expand failDashboard={errors.newPassword && true}>
        <label htmlFor="new-password">{t("profile_expand_password_new")}</label>
        <input
          id="new-password"
          type="password"
          placeholder={t("profile_expand_password_new_placeholder")}
          name="newPassword"
          autoComplete="new-password"
          ref={register({
            required: true,
            pattern: /(?=.*[a-z])(?=.*[A-Z]).{12,}/,
          })}
        />
      </InputItem>
      <InputItem expand failDashboard={errors.repeatNewPassword && true}>
        <label htmlFor="repeat-new-password">{t("profile_expand_password_repeat_new")}</label>
        <input
          id="repeat-new-password"
          type="password"
          placeholder={t("profile_expand_password_repeat_new_placeholder")}
          name="repeatNewPassword"
          autoComplete="new-password"
          ref={register({
            required: true,
            validate: (value) => value === newPassword.current,
          })}
        />
      </InputItem>
      {showSuccessMsg && <Success>{t("profile_expand_password_success")}</Success>}
      {showErrorMsg && <Error style={{ position: "relative", left: 125 }}>{showErrorMsg}</Error>}
      <Buttons>
        <Button
          type="submit"
          background={
            formState.dirtyFields.password &&
            formState.dirtyFields.newPassword &&
            formState.dirtyFields.repeatNewPassword
              ? "rgba(3, 25, 70, 1)"
              : "rgba(3, 25, 70, 0.4)"
          }
          cursor={
            formState.dirtyFields.password &&
            formState.dirtyFields.newPassword &&
            formState.dirtyFields.repeatNewPassword
              ? "auto"
              : "none"
          }
          savechanges>
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
