import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import InputItem from "../elements/InputItem";
import Button from "../elements/Button";
import Error from "../elements/Error";

import { Icon } from "ts-react-feather-icons";

type Formdata = {
  password: string;
  repeat: string;
};

const SetNewPassword: React.FC = () => {
  const { t } = useTranslation<string>();
  const router = useRouter();
  const [visibility, setVisibility] = useState<boolean>(false);
  const [visibilityRepeat, setVisibilityRepeat] = useState<boolean>(false);

  const { register, handleSubmit, errors, watch } = useForm<Formdata>();
  const onSubmit = handleSubmit(({ password, repeat }) => {
    console.log(password, repeat);
    router.replace("/");
  });

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputItem fail={errors.password && true}>
          <label htmlFor="new-password">{t("new_pass_input_label")}</label>
          <input
            id="new-password"
            type={visibility ? "text" : "password"}
            placeholder={t("new_pass_input_placeholder")}
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
        <InputItem fail={errors.repeat && true}>
          <label htmlFor="repeat-password">{t("repeat_new_pass_input_label")}</label>
          <input
            id="repeat-password"
            type={visibilityRepeat ? "text" : "password"}
            placeholder={t("repeat_new_pass_input_placeholder")}
            name="repeat"
            autoComplete="new-password"
            ref={register({
              required: true,
              validate: (value) => value === password.current,
            })}
          />
          <p onClick={() => setVisibilityRepeat(!visibilityRepeat)}>
            <Icon name={visibilityRepeat ? "eye-off" : "eye"} size="22" color="#E1E6EA" />
          </p>
        </InputItem>
        {errors.repeat && errors.repeat.type === "required" && <Error>{t("msg_required")}</Error>}
        {errors.repeat && errors.repeat.type === "validate" && <Error>{t("msg_passwords_not_match")}</Error>}
        <Button primary type="submit">
          {t("change_password")}
        </Button>
      </form>
    </div>
  );
};

export default SetNewPassword;
