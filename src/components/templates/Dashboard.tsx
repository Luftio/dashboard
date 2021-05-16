import React, { useState, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import Loader from "../elements/Loader";
import DashboardNav from "../modules/dashboard/DashboardNav";
import DashboardCard from "../modules/dashboard/DashboardCard";
import ModalDashboard from "../modules/dashboard/ModalDashboard";
import BottomRowCard from "../modules/dashboard/BottomRowCard";

import Device from "../../types/Device";
import DeviceData from "../../types/DeviceData";
import ThingsboardService from "../../services/ThingsboardService";

const Cards = styled.div`
  display: flex;
  width: 95%;
  flex-wrap: wrap;
`;

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

interface DashboardContentProps {
  activeDeviceId: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ activeDeviceId }) => {
  const { t } = useTranslation();

  const [showModalData, setShowModalData] = useState<DeviceData | null>(null);

  const openModal = (data: DeviceData) => {
    setShowModalData(data);
  };

  const [loading, setLoading] = useState<boolean>(true);
  const [devices, setDevices] = useState<Device[]>([]);

  const loadData = async () => {
    setLoading(true);
    const devicesRequest = await ThingsboardService.getInstance().getDevices();
    let devices: Device[] = [];
    for (const device of devicesRequest) {
      const startTs = +new Date() - 24 * 3600000;
      const endTs = +new Date();
      const interval = 600000;
      const tsDataRequest = await ThingsboardService.getInstance().getReadingsTimeseries(
        device.id.id,
        "co2,temp,pres,hum",
        startTs,
        endTs,
        interval,
      );
      if (Object.keys(tsDataRequest).length >= 4) {
        console.log(tsDataRequest);
        const processData = (values: any[]) => {
          let value = 0;
          let minValue = values[0].value;
          let maxValue = values[0].value;
          for (const item of values) {
            value = Number(item.value);
            if (value < minValue) minValue = value;
            if (value > maxValue) maxValue = value;
          }
          return { value, minValue, maxValue };
        };
        const processChange = (values: any[], changeNegative: boolean) => {
          let change = Math.round((values[0].value / values[values.length - 1].value - 1) * 10000) / 100;
          if (!changeNegative) change = -change;
          return { change };
        };
        let data = [];

        tsDataRequest.score = tsDataRequest.co2.map((it: any, i: number) => {
          let score = 0;
          let co2Eq = 100 - (Number(it.value) - 500) * 0.075;
          score += Math.min(100, Math.max(0, co2Eq)) * 4;
          let humidityValue = Number(tsDataRequest.hum[i].value);
          let humidityEq = 105 - Math.pow(45 - humidityValue, 2) * 0.1;
          score += Math.min(100, Math.max(0, humidityEq)) * 2;
          let tempValue = Number(tsDataRequest.temp[i].value);
          let tempEq = 105 - Math.pow(21 - tempValue, 2);
          score += Math.min(100, Math.max(0, tempEq));
          score = Math.round(score / 0.07) / 100;
          return { ts: new Date(it.ts), value: score };
        });
        data.push({
          type: "score",
          values: tsDataRequest.score,
          ...processData(tsDataRequest.score),
          ...processChange(tsDataRequest.score, true),
        });
        tsDataRequest.co2 = tsDataRequest.co2.map((it: any) => ({
          ts: new Date(it.ts),
          value: Math.round(Number(it.value)),
        }));
        data.push({
          type: "CO2",
          values: tsDataRequest.co2,
          ...processData(tsDataRequest.co2),
          ...processChange(tsDataRequest.co2, true),
        });
        tsDataRequest.temp = tsDataRequest.temp.map((it: any) => ({
          ts: new Date(it.ts),
          value: Math.round(Number(it.value) * 100) / 100,
        }));
        data.push({
          type: "temperature",
          values: tsDataRequest.temp,
          ...processData(tsDataRequest.temp),
          ...processChange(tsDataRequest.temp, true),
        });
        tsDataRequest.pres = tsDataRequest.pres.map((it: any) => ({
          ts: new Date(it.ts),
          value: Math.round(Number(it.value)) / 100,
        }));
        data.push({
          type: "pressure",
          values: tsDataRequest.pres,
          ...processData(tsDataRequest.pres),
          ...processChange(tsDataRequest.pres, true),
        });
        tsDataRequest.hum = tsDataRequest.hum.map((it: any) => ({
          ts: new Date(it.ts),
          value: Math.round(Number(it.value) * 100) / 100,
        }));
        data.push({
          type: "humidity",
          values: tsDataRequest.hum,
          ...processData(tsDataRequest.hum),
          ...processChange(tsDataRequest.hum, false),
        });

        let mainColor = "";
        const getTitle = (type: string) => {
          if (type === "score") {
            return t("dashboard_score");
          } else if (type === "CO2") {
            return t("CO2");
          } else if (type === "temperature") {
            return t("dashboard_temperature");
          } else if (type === "pressure") {
            return t("dashboard_pressure");
          } else if (type === "humidity") {
            return t("dashboard_humidity");
          }
          return type;
        };
        data = data.map((it) => {
          let color = "red";
          if (it.value == null) {
          } else if (it.type === "score") {
            if (it.value > 75) color = "green";
            else if (it.value > 50) color = "yellow";
            mainColor = color;
          } else if (it.type === "CO2") {
            if (it.value < 600) color = "green";
            else if (it.value < 1200) color = "yellow";
          } else if (it.type === "temperature") {
            if (it.value < 24 && it.value > 18) color = "green";
            else if (it.value < 26 && it.value > 16) color = "yellow";
          } else if (it.type === "humidity") {
            if (it.value < 60 && it.value > 40) color = "green";
            else if (it.value < 70 && it.value > 30) color = "yellow";
          } else if (it.type === "pressure") {
            color = "green";
          }
          return { ...it, color, title: getTitle(it.type) };
        });

        devices.push({
          name: device.label,
          id: device.id.id,
          color: mainColor,
          data,
        });
      }
    }
    devices = devices.sort((a, b) => (a.name == "L0145HJ7" ? -1 : b.name == "L0145HJ7" ? 1 : 0));
    setDevices(devices);
    setLoading(false);
  };
  useEffect(() => {
    loadData();
  }, []);

  let activeDevice = null;
  if (devices.some((it: any) => it.id === activeDeviceId)) {
    activeDevice = devices.find((it) => it.id === activeDeviceId);
  } else if (devices.length > 0) {
    activeDevice = devices[0];
  }

  return (
    <>
      <Head>
        <title>{t("title_dashboard_page")}</title>
      </Head>
      <Heading dashboard>{t("dashboard_page_heading")}</Heading>
      {loading && (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      )}
      <DashboardNav devices={devices} activeDeviceId={activeDevice?.id || "all"} />
      <Cards>
        {activeDevice?.data?.map((data: DeviceData) => (
          <DashboardCard data={data} onClick={() => openModal(data)} />
        ))}
      </Cards>
      {activeDevice?.data != null && (
        <Cards>
          <BottomRowCard
            message1="Stoupá hodnota CO2"
            date1="14/4/2021"
            message2="Teplota je přiliš vysoká"
            date2="12/4/2021"
            message3="Kritický stav CO2"
            date3="11/4/2021"
            subheading={t("dashboard_events_card_subheading")}
          />
          <BottomRowCard
            feedback
            message1="Aleš Zima"
            date1="12/4/2021"
            message2="Michal Pečinka"
            date2="12/4/2021"
            message3="Jana Nová"
            date3="9/4/2021"
            subheading={t("dashboard_feedback_card_subheading")}
          />
        </Cards>
      )}
      <ModalDashboard data={showModalData} handleClose={() => setShowModalData(null)} />
    </>
  );
};

export default DashboardContent;
