import React, { useRef, useState, MouseEvent } from "react";
import { useSpring, animated } from "react-spring";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryBrushContainer,
} from "victory";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Subheading from "../../elements/Subheading";
import BasicText from "../../elements/BasicText";

import { Icon } from "ts-react-feather-icons";
import DeviceData from "../../../types/DeviceData";

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
  width: 100%;
  padding: 40px 50px;
  height: 100%;
  background: #fff;
  z-index: 10000;
  border-radius: ${(props) => props.theme.border_radius_primary};

  @media only screen and (max-width: 620px) {
    padding: 50px 15px;
  }

  @media only screen and (max-width: 850px) {
    width: 95%;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

const CloseIcon = styled.p`
  cursor: pointer;
`;

interface ModalDashboardProps {
  data: DeviceData | null;
  handleClose: () => void;
}

const ModalDashboard: React.FC<ModalDashboardProps> = ({ data, handleClose }) => {
  const { t } = useTranslation();
  const modalRef = useRef<any>();
  const showModal = data != null;

  const animation = useSpring<any>({
    config: {
      duration: 300,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0px)` : `translateY(-40px)`,
  });

  const closeModal = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      handleClose();
    }
  };

  const [zoomDomain, setZoomDomain] = useState<any>();

  return (
    <>
      {showModal && data != null ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <Div>
              <ModalWrapper>
                <TopRow>
                  <Subheading dashboard>{data.title}</Subheading>
                  <CloseIcon onClick={() => handleClose()}>
                    <Icon name="x" size="22" color="#838C97" />
                  </CloseIcon>
                </TopRow>
                <VictoryChart
                  theme={VictoryTheme.material}
                  width={700}
                  height={500}
                  scale={{ x: "time" }}
                  padding={{ left: 45, top: 20, bottom: 50 }}
                  containerComponent={
                    <VictoryZoomContainer
                      zoomDimension="x"
                      zoomDomain={zoomDomain}
                      onZoomDomainChange={(domain) => setZoomDomain(domain)}
                    />
                  }>
                  <VictoryAxis dependentAxis fixLabelOverlap={true} />
                  <VictoryAxis fixLabelOverlap={true} />
                  <VictoryLine
                    style={{
                      data: { stroke: "#031846" },
                    }}
                    data={data.values}
                    interpolation="natural"
                    x="ts"
                    y="value"
                  />
                </VictoryChart>
                <VictoryChart
                  theme={VictoryTheme.material}
                  padding={{ top: 0, left: 45, right: 0, bottom: 30 }}
                  width={700}
                  height={100}
                  scale={{ x: "time" }}
                  containerComponent={
                    <VictoryBrushContainer
                      brushDimension="x"
                      brushDomain={zoomDomain}
                      onBrushDomainChange={(domain) => setZoomDomain(domain)}
                    />
                  }>
                  <VictoryAxis fixLabelOverlap={true} />
                  <VictoryLine
                    style={{
                      data: { stroke: "#031846" },
                    }}
                    data={data.values}
                    x="ts"
                    y="value"
                  />
                </VictoryChart>
              </ModalWrapper>
            </Div>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default ModalDashboard;
