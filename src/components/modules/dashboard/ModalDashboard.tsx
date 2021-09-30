import React, { useRef, useState, MouseEvent, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Subheading from "../../elements/Subheading";
import Button from "../../elements/Button";
import Calendar from "../../elements/Calendar";
import Loader from "../../elements/Loader";
import EmptyState from "../EmptyState";

import { Icon } from "ts-react-feather-icons";

import { DeviceData, useGetDeviceDataLazyQuery } from "../../../graphql";
import ModalChart from "./ModalChart";

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

const ModalDiv = styled.div`
  position: relative;
`;

const ModalWrapper = styled.div`
  width: 100%;
  padding: 40px 50px;
  height: 100%;
  background: #fff;
  z-index: 10000;
  border-radius: ${(props) => props.theme.border_radius_primary};
  position: relative;

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
  padding-bottom: 25px;
`;

const ChartScales = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  position: relative;
`;

const CloseIcon = styled.p`
  cursor: pointer;
`;

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 452px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    height: 407px;
    width: 700px;
  }

  @media only screen and (max-width: 850px) {
    height: 250px;
    width: 100%;
  }
`;

interface ModalDashboardProps {
  originalData: DeviceData | null;
  handleClose: () => void;
  deviceId: string;
}

const ModalDashboard: React.FC<ModalDashboardProps> = ({ deviceId, originalData, handleClose }) => {
  const { t } = useTranslation();
  const modalRef = useRef<any>();
  const calendarRef = useRef<any>();

  const showModal = originalData != null;

  const [zoomDomain, setZoomDomain] = useState<any>();
  const [chartScale, setChartScale] = useState<string | null>("day");
  const [customOpen, setCustomOpen] = useState<boolean>(false);
  const [customRange, setCustomRange] = useState<Date | null>(null);

  const getTitle = (type: string) => {
    if (type === "score") {
      return t("dashboard_score");
    } else if (type === "CO2") {
      return t("CO2");
    } else if (type === "temperature") {
      return t("dashboard_temperature");
    } else if (type === "siaq") {
      return t("dashboard_siaq");
    } else if (type === "pressure") {
      return t("dashboard_pressure");
    } else if (type === "humidity") {
      return t("dashboard_humidity");
    }
    return type;
  };

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

  const [deviceDataQuery, { data: deviceDataQueryData, loading: devicesDataLoading }] = useGetDeviceDataLazyQuery({
    fetchPolicy: "no-cache",
    onCompleted: () => {
      setZoomDomain(null);
    },
  });

  const data = deviceDataQueryData?.device_data?.data?.find((it: any) => it.type == originalData?.type);

  const handleDayChange = (day: Date) => {
    if (day > new Date()) {
      return;
    }

    setCustomRange(day);
    setCustomOpen(false);
    setChartScale("custom");
  };

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setCustomOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef]);

  useEffect(() => {
    if (deviceDataQueryData == null && chartScale == "day") return;
    const timeScales = {
      "6h": [+new Date() - 6 * 3600000, +new Date(), 300000, 6],
      day: [+new Date() - 24 * 3600000, +new Date(), 300000, 8],
      yesterday: [+new Date() - 48 * 3600000, +(+new Date() - 24 * 3600000), 300000, 6],
      week: [+new Date() - 7 * 24 * 3600000, +new Date(), 2 * 3600000, 7],
      month: [+new Date() - 30 * 24 * 3600000, +new Date(), 24 * 3600000, 10],
      custom: [+new Date(+customRange), +new Date(+customRange) + 24 * 3600000, 2 * 3600000, 8],
    };
    const timing = timeScales[chartScale];

    deviceDataQuery({
      variables: {
        id: deviceId,
        startTs: new Date(timing[0]).toISOString(),
        endTs: new Date(timing[1]).toISOString(),
        interval: timing[2],
      },
    });
  }, [deviceDataQuery, chartScale, customRange]);

  return (
    <>
      {showModal && originalData != null && originalData.type != null ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <Div>
              <ModalWrapper>
                <ModalDiv>
                  <TopRow>
                    <Subheading dashboard>{getTitle(originalData.type)}</Subheading>
                    <CloseIcon onClick={() => handleClose()}>
                      <Icon name="x" size="22" color="#838C97" />
                    </CloseIcon>
                  </TopRow>
                  <ChartScales>
                    {["6h", "day", "yesterday", "week", "month"].map((it, i) => (
                      <Button
                        dashboardModal
                        dashboardModalActive={chartScale == it && true}
                        key={i}
                        onClick={() => {
                          setChartScale(it);
                          setCustomRange(null);
                          setCustomOpen(false);
                        }}>
                        {t("time_" + it)}
                      </Button>
                    ))}
                    {customRange && (
                      <Button dashboardModal dashboardCustom dashboardModalActive={chartScale === "custom" && true}>
                        {customRange.getDate() + "/" + (customRange.getMonth() + 1)}
                      </Button>
                    )}
                    <Button
                      dashboardModal
                      dashboardCustom
                      dashboardModalActive={customOpen && true}
                      onClick={() => {
                        setCustomOpen(true);
                      }}>
                      {t("custom")}
                    </Button>
                  </ChartScales>
                  {customOpen && (
                    <div ref={calendarRef}>
                      <Calendar customRange={customRange} onDayClick={(day: Date) => handleDayChange(day)} />
                    </div>
                  )}
                  {devicesDataLoading ? (
                    <LoadingWrapper>
                      <Loader />
                    </LoadingWrapper>
                  ) : chartScale === "day" ? (
                    <ModalChart
                      data={originalData.values}
                      zoomDomain={zoomDomain}
                      setZoomDomain={(domain) => setZoomDomain(domain)}
                      unit={originalData.unit}
                    />
                  ) : data?.values != null ? (
                    <ModalChart
                      data={data?.values}
                      zoomDomain={zoomDomain}
                      setZoomDomain={(domain) => setZoomDomain(domain)}
                      unit={originalData.unit}
                    />
                  ) : (
                    <EmptyState message={t("dashboard_empty_data")} />
                  )}
                </ModalDiv>
              </ModalWrapper>
            </Div>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default ModalDashboard;
