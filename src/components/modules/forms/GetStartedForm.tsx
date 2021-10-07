import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import InputItem from "../../elements/InputItem";
import Button from "../../elements/Button";
import HaveAccount from "../../elements/HaveAccount";
import Error from "../../elements/Error";
import Checkbox from "../../elements/Checkbox";
import Modal from "../Modal";

import { Icon } from "ts-react-feather-icons";
import ThingsboardService from "../../../services/ThingsboardService";

import { useGetAccountQuery } from "../../../graphql";

type Formdata = {
  name: string;
  surname: string;
  password: string;
  check: boolean;
};

const SignUpForm: React.FC = () => {
  const { t } = useTranslation<string>();
  const router = useRouter();
  const id: string = typeof router.query.id === "string" ? router.query.id : "";

  const [visibility, setVisibility] = useState<boolean>(false);
  const [logInError, setLogInError] = useState<boolean>(false);

  const { register, handleSubmit, errors } = useForm<Formdata>();

  const getAccount = useGetAccountQuery({ skip: true });

  const onSubmit = handleSubmit(({ name, surname, password, check }) => {
    ThingsboardService.getInstance()
      .acceptInvite(id, name, surname, password)
      .then(() => {
        getAccount.refetch().then((query) => {
          if (query.data?.account.role === "manager") {
            router.replace("/dashboard/all");
          } else {
            router.replace("/invite/download-app");
          }
        });
      })
      .catch(() => {
        setLogInError(true);
      });
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
        {errors.name && errors.name.type === "required" && (
          <Error data-cy="first-name-required">{t("msg_required")}</Error>
        )}
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
        {errors.surname && errors.surname.type === "required" && (
          <Error data-cy="last-name-required">{t("msg_required")}</Error>
        )}
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
              pattern: /(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            })}
          />
          <p data-cy="eye" onClick={() => setVisibility(!visibility)}>
            <Icon data-cy="eye-icon" name={visibility ? "eye-off" : "eye"} size="22" color="#E1E6EA" />
          </p>
        </InputItem>
        {errors.password && errors.password.type === "required" && (
          <Error data-cy="password-required">{t("msg_required")}</Error>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <Error data-cy="password-invalid">{t("msg_invalid_password")}</Error>
        )}
        {errors.check && <Error data-cy="terms-required">{t("msg_required")}</Error>}
        {logInError && <Error data-cy="invalid-user">{t("msg_login_error")}</Error>}
        <Button primary type="submit" data-cy="submit">
          {t("create_account")}
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
