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
import Checkbox from "../elements/Checkbox";

import { Icon } from "ts-react-feather-icons";

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
    router.replace("/register/verify-email");
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputItem fail={errors.name && true}>
          <label htmlFor="name">{t("name_input_label")}</label>
          <input
            data-cy="first-name"
            id="name"
            type="text"
            placeholder={t("name_input_placeholder")}
            name="name"
            ref={register({ required: true })}
          />
        </InputItem>
        {errors.name && errors.name.type === "required" && <Error>{t("msg_required")}</Error>}
        <InputItem fail={errors.surname && true}>
          <label htmlFor="surname">{t("surname_input_label")}</label>
          <input
            data-cy="last-name"
            id="surname"
            type="text"
            placeholder={t("surname_input_placeholder")}
            name="surname"
            ref={register({ required: true })}
          />
        </InputItem>
        {errors.surname && errors.surname.type === "required" && <Error>{t("msg_required")}</Error>}
        <InputItem fail={errors.email && true}>
          <label htmlFor="email">{t("email_input_label")}</label>
          <input
            data-cy="e-mail"
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
        <InputItem fail={errors.password && true}>
          <label htmlFor="new-password">{t("pass_input_label")}</label>
          <input
            data-cy="password"
            id="new-password"
            type={visibility ? "text" : "password"}
            placeholder={t("pass_input_placeholder")}
            name="password"
            autoComplete="new-password"
            ref={register({
              required: true,
              pattern: /(?=.*[a-z])(?=.*[A-Z]).{12,}/,
            })}
          />
          <p onClick={() => setVisibility(!visibility)}>
            <Icon name={visibility ? "eye-off" : "eye"} size="22" color="#E1E6EA" />
          </p>
        </InputItem>
        {errors.password && errors.password.type === "required" && <Error>{t("msg_required")}</Error>}
        {errors.password && errors.password.type === "pattern" && <Error>{t("msg_invalid_password")}</Error>}
        <Checkbox>
          <input
            data-cy="checkbox"
            id="checkbox"
            aria-label="checkbox"
            type="checkbox"
            name="check"
            ref={register({
              required: true,
            })}
          />
          <label htmlFor="checkbox">{t("agree_with")}&nbsp;</label>
          <a href={t("terms_url")} target="_blank">
            {t("terms")}
          </a>
        </Checkbox>
        {errors.check && <Error>{t("msg_required")}</Error>}
        <Button primary type="submit" data-cy="submit">
          {t("create_account")}
        </Button>
      </form>
      <HaveAccount>
        <p>{t("have_account")}&nbsp;</p>
        <Link href="/">
          <a data-cy="sign-in">{t("sign_in")}</a>
        </Link>
      </HaveAccount>
    </div>
  );
};

export default SignUpForm;
