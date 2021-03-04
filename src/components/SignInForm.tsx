import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import "../i18n";
import { useTranslation } from "react-i18next";
import { InputItem } from "../../styles/InputItem";
import { Password, PasswordLabel } from "../../styles/PasswordItem";
import { Button } from "../../styles/Button";
import { HaveAccount } from "../../styles/HaveAccount";
import { Error } from "../../styles/Error";

const eva = require("eva-icons");

const ForgotPassword = styled.a`
  color: #afb8bf;
  font-size: 0.875rem;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  position: relative;
  width: 200px;
  text-align: right;
  top: -10px;
  text-align: right;

  &:hover {
    color: #031846;
  }
`;

type Formdata = {
  email: string;
  password: string;
};

const SignUpForm: React.FC = () => {
  const { t } = useTranslation<string>();
  const [visibility, setVisibility] = useState<boolean>(false);
  const { register, handleSubmit, errors } = useForm<Formdata>();
  const onSubmit = handleSubmit(({ email, password }) => {
    console.log(email, password);
  });

  console.log(visibility);

  useEffect(() => {
    eva.replace();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputItem>
          <label>{t("email_input_label")}</label>
          <input
            type="text"
            placeholder={t("email_input_placeholder")}
            name="email"
            ref={register({
              required: true,
              pattern: /[^]@[^]/,
            })}
          />
        </InputItem>
        {errors.email && errors.email.type === "required" && (
          <Error>{t("msg_required")}</Error>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <Error>{t("msg_invalid_email")}</Error>
        )}
        <PasswordLabel>{t("pass_input_label")}</PasswordLabel>
        <Password>
          <input
            type={visibility ? "text" : "password"}
            placeholder={t("pass_input_placeholder")}
            name="password"
            ref={register({
              required: true,
            })}
          />
          <p onClick={() => setVisibility(!visibility)}>
            <i
              data-eva={visibility ? "eye-outline" : "eye-off-outline"}
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
        <Link href="/password/request-change">
          <ForgotPassword>{t("forgot_password")}</ForgotPassword>
        </Link>
        <Button type="submit">{t("sign_in")}</Button>
      </form>
      <HaveAccount>
        <p>{t("dont_have_account")}&nbsp;</p>
        <Link href="/register">
          <a>{t("create_account")}</a>
        </Link>
      </HaveAccount>
    </div>
  );
};

export default SignUpForm;
