import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import "../i18n";
import { useTranslation } from "react-i18next";
import { InputItem } from "../../styles/InputItem";
import { Button } from "../../styles/Button";
import { HaveAccount } from "../../styles/HaveAccount";
import { Error } from "../../styles/Error";
import { Icon } from "ts-react-feather-icons";

const ForgotPassword = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.color_secondary};
  font-size: ${(props) => props.theme.font_size_secondary};
  text-decoration: underline;
  cursor: pointer;
  position: relative;
  top: -10px;

  &:hover {
    color: ${(props) => props.theme.color_brand};
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
        <InputItem>
          <label>{t("pass_input_label")}</label>
          <input
            type={visibility ? "text" : "password"}
            placeholder={t("pass_input_placeholder")}
            name="password"
            ref={register({
              required: true,
            })}
          />
          <p onClick={() => setVisibility(!visibility)}>
            <Icon
              name={visibility ? "eye-off" : "eye"}
              size="22"
              color="#E1E6EA"
            />
          </p>
        </InputItem>
        <Link href="/password/request-change">
          <ForgotPassword>{t("forgot_password")}</ForgotPassword>
        </Link>
        {errors.password && errors.password.type === "required" && (
          <Error>{t("msg_required")}</Error>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <Error>{t("msg_invalid_password")}</Error>
        )}
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
