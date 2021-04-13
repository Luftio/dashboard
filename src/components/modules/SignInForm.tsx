import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import InputItem from "../elements/InputItem";
import Button from "../elements/Button";
import HaveAccount from "../elements/HaveAccount";
import Error from "../elements/Error";
import ForgotPassword from "../elements/ForgotPassword";

import { Icon } from "ts-react-feather-icons";
import ThingsboardService from "../../services/ThingsboardService";

type Formdata = {
  email: string;
  password: string;
};

const SignUpForm: React.FC = () => {
  const { t } = useTranslation<string>();
  const router = useRouter();
  const [visibility, setVisibility] = useState<boolean>(false);

  const { register, handleSubmit, errors } = useForm<Formdata>({ mode: "onSubmit" });
  const onSubmit = handleSubmit(({ email, password }) => {
    ThingsboardService.getInstance()
      .loginEmail(email, password)
      .then((success) => {
        router.replace("/dashboard");
      })
      .catch((error) => {
        alert("Login error");
      });
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputItem fail={errors.email && true}>
          <label htmlFor="email">{t("email_input_label")}</label>
          <input
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
        {errors.email && errors.email.type === "required" && <Error>{t("msg_required")}</Error>}
        {errors.email && errors.email.type === "pattern" && <Error>{t("msg_invalid_email")}</Error>}
        <InputItem fail={errors.password && true}>
          <label htmlFor="current-password">{t("pass_input_label")}</label>
          <input
            id="current-password"
            type={visibility ? "text" : "password"}
            autoComplete="current-password"
            placeholder={t("pass_input_placeholder")}
            name="password"
            ref={register({
              required: true,
            })}
          />
          <p onClick={() => setVisibility(!visibility)}>
            <Icon name={visibility ? "eye-off" : "eye"} size="22" color="#E1E6EA" />
          </p>
        </InputItem>
        <Link href="/password/request-change">
          <ForgotPassword>{t("forgot_password")}</ForgotPassword>
        </Link>
        {errors.password && errors.password.type === "required" && <Error>{t("msg_required")}</Error>}
        <Button primary type="submit">
          {t("sign_in")}
        </Button>
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
