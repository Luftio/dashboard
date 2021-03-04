import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import "../i18n";
import { useTranslation } from "react-i18next";
import { InputItem } from "../../styles/InputItem";
import { Button } from "../../styles/Button";
import { Error } from "../../styles/Error";

const eva = require("eva-icons");

const ForgotPassword = styled.a`
  color: #afb8bf;
  font-size: 0.875rem;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  position: relative;
  width: 200px;
  text-align: right;
  top: -10px;

  &:hover {
    color: #031846;
  }
`;

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

  console.log(errors);

  useEffect(() => {
    eva.replace();
  }, []);

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
        <Button type="submit">{t("send_instruction")}</Button>
      </form>
    </div>
  );
};

export default SendIntructions;
