import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import "../i18n";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { InputItem } from "../../styles/InputItem";
import { Password, PasswordLabel } from "../../styles/PasswordItem";
import { Button } from "../../styles/Button";
import { HaveAccount } from "../../styles/HaveAccount";
import { Error } from "../../styles/Error";

const eva = require("eva-icons");

const Checkbox = styled.div`
  display: flex;
  align-items: center;

  > input {
    opacity: 0;
  }

  > label {
    color: #afb8bf;
    font-size: 0.875rem;
    font-weight: 400;
    display: inline-block;
    margin: 0 0 0 15px;
    position: relative;

    &::after {
      content: "";
      border: 1px solid #e1e6ea;
      border-radius: 2px;
      width: 17px;
      height: 17px;
      position: absolute;
      left: -27px;
    }
  }

  > a {
    color: #afb8bf;
    font-size: 0.875rem;
    text-decoration: underline;

    &:hover {
      color: #031846;
    }
  }
`;

type Formdata = {
  name: string;
  surname: string;
  email: string;
  password: string;
  check: boolean;
};

const SignUpForm: React.FC = () => {
  const { t } = useTranslation<string>();
  const router = useRouter();
  const [visibility, setVisibility] = useState<boolean>(false);
  const { register, handleSubmit, errors } = useForm<Formdata>();
  const onSubmit = handleSubmit(({ name, surname, email, password, check }) => {
    console.log(name, surname, email, password, check);
    router.replace("/verify-email");
  });

  useEffect(() => {
    eva.replace();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputItem>
          <label>{t("name_input_label")}</label>
          <input
            type="text"
            placeholder={t("name_input_placeholder")}
            name="name"
            ref={register({ required: true })}
          />
        </InputItem>
        {errors.name && errors.name.type === "required" && (
          <Error>{t("msg_required")}</Error>
        )}
        <InputItem>
          <label>{t("surname_input_label")}</label>
          <input
            type="text"
            placeholder={t("surname_input_placeholder")}
            name="surname"
            ref={register({ required: true })}
          />
        </InputItem>
        {errors.surname && errors.surname.type === "required" && (
          <Error>{t("msg_required")}</Error>
        )}
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
        <Checkbox>
          <input
            type="checkbox"
            name="check"
            ref={register({
              required: true,
            })}
          />
          <label>{t("agree_with")}&nbsp;</label>
          <Link href="https://luftio.cz/zasady-ochrany-osobnich-udaju/">
            <a target="_blank">{t("terms")}</a>
          </Link>
        </Checkbox>
        {errors.check && <Error>{t("msg_required")}</Error>}
        <Button type="submit">{t("create_account")}</Button>
      </form>
      <HaveAccount>
        <p>{t("have_account")}&nbsp;</p>
        <Link href="/">
          <a>{t("sign_in")}</a>
        </Link>
      </HaveAccount>
    </div>
  );
};

export default SignUpForm;
