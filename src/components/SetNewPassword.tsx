import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styled from "styled-components";
import "../i18n";
import { useTranslation } from "react-i18next";
import { Password, PasswordLabel } from "../../styles/PasswordItem";
import { Button } from "../../styles/Button";
import { Error } from "../../styles/Error";

const eva = require("eva-icons");

const PasswordRequirements = styled.a`
  color: #afb8bf;
  font-size: 0.875rem;
  text-align: center;
  padding-bottom: 15px;
  cursor: pointer;
  position: relative;
  width: 200px;
  text-align: right;
  top: -10px;

  &:hover {
    color: #031846;
  }
`;

type Formdata = {
  password: string;
  repeat: string;
};

const SetNewPassword: React.FC = () => {
  const { t } = useTranslation<string>();
  const router = useRouter();
  const [visibility, setVisibility] = useState<boolean>(false);
  const { register, handleSubmit, errors } = useForm<Formdata>();
  const onSubmit = handleSubmit(({ password, repeat }) => {
    console.log(password, repeat);
    router.replace("/");
  });

  console.log(errors);

  useEffect(() => {
    eva.replace();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <PasswordLabel>{t("new_pass_input_label")}</PasswordLabel>
        <Password>
          <input
            type={visibility ? "text" : "password"}
            placeholder={t("new_pass_input_placeholder")}
            name="password"
            ref={register({
              required: true,
              pattern: /(?=.*[a-z])(?=.*[A-Z]).{12,}/,
            })}
          />
          <p onClick={() => setVisibility(!visibility)}>
            <i
              data-eva={visibility ? "eye-off-outline" : "eye-outline"}
              data-eva-fill="#E1E6EA"
            ></i>
          </p>
        </Password>
        {errors.password && errors.password.type === "required" && (
          <Error>{t("msg_required")}</Error>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <Error>{t("msg_invalid_password")}</Error>
        )}
        <PasswordRequirements>{t("msg_invalid_password")}</PasswordRequirements>
        <PasswordLabel>{t("repeat_new_pass_input_label")}</PasswordLabel>
        <Password>
          <input
            type={visibility ? "text" : "password"}
            placeholder={t("repeat_new_pass_input_placeholder")}
            name="password"
            ref={register({
              required: true,
              pattern: /(?=.*[a-z])(?=.*[A-Z]).{12,}/,
            })}
          />
          <p onClick={() => setVisibility(!visibility)}>
            <i
              data-eva={visibility ? "eye-off-outline" : "eye-outline"}
              data-eva-fill="#E1E6EA"
            ></i>
          </p>
        </Password>
        {errors.password && errors.password.type === "required" && (
          <Error>{t("msg_required")}</Error>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <Error>{t("msg_invalid_password")}</Error>
        )}
        <Button type="submit">{t("change_password")}</Button>
      </form>
    </div>
  );
};

export default SetNewPassword;
