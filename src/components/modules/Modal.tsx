import React, { useRef, MouseEvent } from "react";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Subheading from "../elements/Subheading";
import BasicText from "../elements/BasicText";
import Button from "../elements/Button";
import InputItem from "../elements/InputItem";
import Error from "../elements/Error";

import { Icon } from "ts-react-feather-icons";
import SelectItem from "../elements/SelectItem";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 60%;
  padding: 50px 60px 10px 60px;
  height: 100%;
  background: #fff;
  z-index: 10000;
  border-radius: ${(props) => props.theme.border_radius_primary};

  @media only screen and (max-width: 850px) {
    width: 95%;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 25px;
  border-bottom: ${(props) => props.theme.divider};
`;

const Top = styled.div`
  margin-bottom: 50px;
`;

const CloseIcon = styled.p`
  cursor: pointer;
`;

const Form = styled.form`
  margin-top: 20px;
`;

type Formdata = {
  email: string;
  role: string;
};

interface ModalProps {
  showModal: boolean;
  setShowModal: any;
  subheading: string;
  text: string;
  href: string;
  onClick?: () => void;
  buttonText: string;
  addModal?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  subheading,
  text,
  buttonText,
  addModal,
  href,
  onClick,
}) => {
  const { t } = useTranslation<string>();

  const { register, handleSubmit, errors } = useForm<Formdata>({ mode: "onSubmit" });
  const onSubmit = handleSubmit(({ email, role }) => {
    console.log(email, role);
    setShowModal(false);
  });

  const modalRef = useRef<any>();

  const animation = useSpring<any>({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0px)` : `translateY(-40px)`,
  });

  const closeModal = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <Div>
              <ModalWrapper>
                <Top>
                  <TopRow>
                    <Subheading dashboard>{subheading}</Subheading>
                    <CloseIcon onClick={() => setShowModal((prev: any) => !prev)}>
                      <Icon name="x" size="22" color="#838C97" />
                    </CloseIcon>
                  </TopRow>
                  {addModal ? (
                    <>
                      <BasicText>{text}</BasicText>
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
                            <option value="user">User</option>
                            <option value="manager">Manager</option>
                          </select>
                        </SelectItem>
                        <Button modal type="submit">
                          {buttonText}
                        </Button>
                      </Form>
                    </>
                  ) : (
                    <>
                      <BasicText>{text}</BasicText>
                      <Link href={href}>
                        <Button modal onClick={onClick}>
                          {buttonText}
                        </Button>
                      </Link>
                    </>
                  )}
                </Top>
              </ModalWrapper>
            </Div>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
