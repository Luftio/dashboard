import React, { useRef, MouseEvent } from "react";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Subheading from "../elements/Subheading";
import BasicText from "../elements/BasicText";
import Button from "../elements/Button";

import { Icon } from "ts-react-feather-icons";

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

interface ModalProps {
  showModal: boolean;
  setShowModal: any;
  subheading: string;
  text?: string;
  href?: string;
  buttonText?: string;
  onClick?: () => void;
  renderModal?: (handleClose: () => void) => React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  subheading,
  text,
  buttonText,
  renderModal,
  href,
  onClick,
}) => {
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
                  {renderModal ? (
                    renderModal(() => setShowModal(false))
                  ) : (
                    <>
                      <BasicText>{text}</BasicText>
                      <Link href={href || ""}>
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
