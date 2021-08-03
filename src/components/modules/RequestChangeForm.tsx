import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import InputItem from "../elements/InputItem";
import Button from "../elements/Button";
import Error from "../elements/Error";

type Formdata = {
  email: string;
};

const SendIntructions: React.FC = () => {
  const { t } = useTranslation<string>();
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm<Formdata>();
  const onSubmit = handleSubmit(({ email }) => {
    console.log(email);
    router.replace("/password/send-instructions");
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
        <Button primary type="submit" data-cy="submit">
          {t("send_instruction")}
        </Button>
      </form>
    </div>
  );
};

export default SendIntructions;
