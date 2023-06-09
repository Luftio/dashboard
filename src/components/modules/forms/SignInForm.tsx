import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import InputItem from "../../elements/InputItem";
import Button from "../../elements/Button";
import Error from "../../elements/Error";
import ForgotPassword from "../../elements/ForgotPassword";

import { Icon } from "ts-react-feather-icons";
import ThingsboardService from "../../../services/ThingsboardService";
import Checkbox from "../../elements/Checkbox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  @media only screen and (max-width: 970px) {
    width: 450px;
  }

  @media only screen and (max-width: 570px) {
    width: 100%;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type Formdata = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const SignUpForm: React.FC = () => {
  const { t } = useTranslation<string>();

  const router = useRouter();
  const [visibility, setVisibility] = useState<boolean>(false);
  const [logInError, setLogInError] = useState<boolean>(false);

  // Check if already logged in
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("rememberMe") === "true" &&
      ThingsboardService.getInstance().isLoggedIn()
    ) {
      router.replace("/dashboard/all");
    }
  });

  const { register, handleSubmit, errors } = useForm<Formdata>({
    mode: "onSubmit",
    defaultValues: {
      rememberMe: false,
    },
  });
  const onSubmit = handleSubmit(({ email, password, rememberMe }) => {
    localStorage.setItem("rememberMe", rememberMe.toString());
    ThingsboardService.getInstance()
      .loginEmail(email, password)
      .then(() => {
        router.replace("/dashboard/all");
      })
      .catch(() => {
        setLogInError(true);
      });
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputItem fail={errors.email && true}>
          <label htmlFor="email">{t("email_input_label")}</label>
          <input
            data-cy="email"
            id="email"
            type="text"
            placeholder={t("email_input_placeholder")}
            name="email"
            autoComplete="email"
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
        </InputItem>
        {errors.email && errors.email.type === "required" && (
          <Error data-cy="email-required">{t("msg_required")}</Error>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <Error data-cy="email-invalid">{t("msg_invalid_email")}</Error>
        )}
        <Wrapper>
          <InputItem fail={errors.password && true}>
            <label htmlFor="current-password">{t("pass_input_label")}</label>
            <input
              data-cy="password"
              id="current-password"
              type={visibility ? "text" : "password"}
              autoComplete="current-password"
              placeholder={t("pass_input_placeholder")}
              name="password"
              ref={register({
                required: true,
              })}
            />
            <p data-cy="eye" onClick={() => setVisibility(!visibility)}>
              <Icon data-cy="eye-icon" name={visibility ? "eye-off" : "eye"} size="22" color="#E1E6EA" />
            </p>
          </InputItem>
          <BottomRow>
            <Checkbox>
              <input
                data-cy="checkbox"
                id="checkbox"
                aria-label="checkbox"
                type="checkbox"
                name="rememberMe"
                ref={register()}
              />
              <label htmlFor="checkbox">Remember me</label>
            </Checkbox>
            <Link href="/password/request-change">
              <ForgotPassword data-cy="forgot-password">{t("forgot_password")}</ForgotPassword>
            </Link>
          </BottomRow>
        </Wrapper>

        {errors.password && errors.password.type === "required" && (
          <Error data-cy="password-required">{t("msg_required")}</Error>
        )}
        {logInError && <Error data-cy="invalid-user">{t("msg_login_error")}</Error>}
        <Button primary type="submit" data-cy="submit">
          {t("sign_in")}
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
