import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import { InputItem } from "../elements/InputItem";
import { Button } from "../elements/Button";
import { Error } from "../elements/Error";
import { PasswordRequirements } from "../elements/PasswordRequirements";

import { Icon } from "ts-react-feather-icons";

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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputItem>
          <label>{t("new_pass_input_label")}</label>
          <input
            type={visibility ? "text" : "password"}
            placeholder={t("new_pass_input_placeholder")}
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
        <PasswordRequirements>{t("msg_invalid_password")}</PasswordRequirements>
        {errors.password && errors.password.type === "required" && (
          <Error>{t("msg_required")}</Error>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <Error>{t("msg_invalid_password")}</Error>
        )}
        <InputItem>
          <label>{t("repeat_new_pass_input_label")}</label>
          <input
            type={visibility ? "text" : "password"}
            placeholder={t("repeat_new_pass_input_placeholder")}
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
        {errors.password && errors.password.type === "required" && (
          <Error>{t("msg_required")}</Error>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <Error>{t("msg_invalid_password")}</Error>
        )}
        <Button primary type="submit">
          {t("change_password")}
        </Button>
      </form>
    </div>
  );
};

export default SetNewPassword;
