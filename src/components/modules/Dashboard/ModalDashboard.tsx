import React, { useRef, MouseEvent } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Subheading from "../../elements/Subheading";
import BasicText from "../../elements/BasicText";

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

const ModalWrapper = styled.div`
  width: 100%;
  padding: 50px 60px;
  height: 100%;
  background: #fff;
  z-index: 10000;
  border-radius: ${(props) => props.theme.border_radius_primary};

  @media only screen and (max-width: 620px) {
    padding: 50px 15px;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 300px;
  width: 700px;
`;

const CloseIcon = styled.p`
  cursor: pointer;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  justify-content: center;
`;

const BottomRowItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: space-between;
  text-align: center;
  flex: 0.2;
`;

interface Props {
  showModal: boolean;
  setShowModal: any;
  subheading: string;
  score: number;
  minValue: number;
  maxValue: number;
  change: number;
}

const ModalDashboard: React.FC<Props> = ({ showModal, setShowModal, subheading, score, minValue, maxValue, change }) => {
  const { t } = useTranslation();
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
            <ModalWrapper>
              <TopRow>
                <Subheading dashboard>{subheading}</Subheading>
                <CloseIcon onClick={() => setShowModal((prev: any) => !prev)}>
                  <Icon name="x" size="22" color="#838C97" />
                </CloseIcon>
              </TopRow>
              <BottomRow>
                <BottomRowItem>
                  <BasicText procentsDashboard color={score > 75 ? "#23A454" : score > 40 ? "#FFB951" : "#E55B5B"}>
                    {score} %
                  </BasicText>
                  <BasicText bottomRowProcentsName>{t("dashboard_modal_score_now")}</BasicText>
                </BottomRowItem>
                <BottomRowItem>
                  <BasicText bottomRowProcents>{maxValue} %</BasicText>
                  <BasicText bottomRowProcentsName>max.</BasicText>
                </BottomRowItem>
                <BottomRowItem>
                  <BasicText bottomRowProcents>{minValue} %</BasicText>
                  <BasicText bottomRowProcentsName>min.</BasicText>
                </BottomRowItem>
                <BottomRowItem>
                  <BasicText bottomRowProcents color={change > 0 ? "#23A454" : "#E55B5B"}>
                    {change} %
                  </BasicText>
                  <BasicText bottomRowProcentsName>{change > 0 ? t("dashboard_improvement") : t("dashboard_deterioration")}</BasicText>
                </BottomRowItem>
              </BottomRow>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default ModalDashboard;
