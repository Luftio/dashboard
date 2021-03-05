import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import "../i18n";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { InputItem } from "../../styles/InputItem";
import { Button } from "../../styles/Button";
import { HaveAccount } from "../../styles/HaveAccount";
import { Error } from "../../styles/Error";
import { Icon } from "ts-react-feather-icons";

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  > input {
    opacity: 0;
  }

  > label {
    color: ${(props) => props.theme.color_secondary};
    font-size: ${(props) => props.theme.font_size_secondary};
    margin: 0 0 0 15px;
    position: relative;

    &::after {
      content: "";
      border: ${(props) => props.theme.border_primary};
      border-radius: ${(props) => props.theme.border_radius_checkbox};
      width: 17px;
      height: 17px;
      position: absolute;
      left: -27px;
    }
  }

  > a {
    color: ${(props) => props.theme.color_secondary};
    font-size: ${(props) => props.theme.font_size_secondary};
    text-decoration: underline;

    &:hover {
      color: ${(props) => props.theme.color_brand};
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
        <InputItem>
          <label>{t("pass_input_label")}</label>
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
            <Icon
              name={visibility ? "eye-off" : "eye"}
              size="22"
              color="#E1E6EA"
            />
          </p>
        </InputItem>
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
