import React, { useState } from "react";
import styled, { css } from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import SelectItem from "../../elements/SelectItem";
import InputItem from "../../elements/InputItem";
import Error from "../../elements/Error";
import BasicText from "../../elements/BasicText";
import Button from "../../elements/Button";
import SuccessCheck from "../../elements/SuccessCheck";

import { useForm } from "react-hook-form";
import { useInviteUserMutation } from "../../../graphql";

const Form = styled.form`
  margin-top: 20px;
`;

const Div = styled.div<{ hide?: boolean }>`
  opacity: 1;

  ${(props) =>
    props.hide &&
    css`
      opacity: 0;
    `}
`;

const CheckDiv = styled.div<{ hide?: boolean }>`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 850px) {
    width: 85%;
    height: 50%;
  }

  @media only screen and (max-width: 600px) {
    width: 75%;
    height: 50%;
  }

  @media only screen and (max-width: 400px) {
    width: 55%;
    height: 50%;
  }
`;

export interface InviteUserFormProps {
  handleClose: () => void;
  handleRefetch: () => void;
}

interface Formdata {
  email: string;
  role: string;
}

export const InviteUserForm: React.FC<InviteUserFormProps> = ({ handleClose, handleRefetch }) => {
  const { t } = useTranslation<string>();

  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [inviteUser] = useInviteUserMutation();

  const { register, handleSubmit, errors } = useForm<Formdata>({ mode: "onSubmit" });
  const onSubmit = handleSubmit(({ email, role }) => {
    inviteUser({ variables: { email, role } }).then(() => {
      handleRefetch();
    });
    setShowConfirm(true);
    setTimeout(() => {
      handleClose();
    }, 1600);
  });

  return (
    <>
      {showConfirm && (
        <CheckDiv>
          <SuccessCheck />
          <BasicText successCheck>{t("manage_user_success")} 🎉</BasicText>
        </CheckDiv>
      )}
      <Div hide={showConfirm ? true : false}>
        <BasicText>{t("manage_users_modal_add_text")}</BasicText>
        <BasicText>
          <b>Role {t("manage_users_user_heading")}</b> - {t("manage_users_user_text")}
        </BasicText>
        <BasicText>
          <b>Role {t("manage_users_manager_heading")}</b> - {t("manage_users_manager_text")}
        </BasicText>
        <Form onSubmit={onSubmit}>
          <InputItem modal>
            <label htmlFor="email">{t("email_input_label")}</label>
            <input
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
          <SelectItem modal>
            <label htmlFor="role">Role</label>
            <select name="role" ref={register}>
              <option value="user">{t("manage_users_user_heading")}</option>
              <option value="manager">{t("manage_users_manager_heading")}</option>
            </select>
          </SelectItem>
          <Button modal type="submit">
            {t("manage_users_add")}
          </Button>
        </Form>
      </Div>
    </>
  );
};

export default InviteUserForm;
