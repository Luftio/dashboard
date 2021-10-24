import React, { useEffect, useState, useRef, useMemo } from "react";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import ScoreAllCard from "../modules/report/ScoreAllCard";
import Filter from "../elements/Filter";

import { useGetDeviceDataLazyQuery, useGetDevicesQuery } from "../../graphql";
import ReportCard from "../modules/report/ReportCard";

import { DateUtils } from "react-day-picker";
import Button from "../elements/Button";
import Calendar from "../elements/Calendar";

const Cards = styled.div`
  display: flex;
  width: 95%;
  flex-wrap: wrap;
`;

const HeadingDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    margin-bottom: 30px;
    align-items: flex-start;
  }
`;

const ReportData: React.FC = () => {
  const { t } = useTranslation();

  const { data: devices, loading: devicesLoading } = useGetDevicesQuery();

  const [selectedDevice, setSelectedDevice] = useState<{ label: string; value: string } | null>(null);

  const [customOpen, setCustomOpen] = useState<boolean>(false);
  const [customRange, setCustomRange] = useState<any>({
    from: undefined,
    to: undefined,
  });

  const calendarRef = useRef<any>();

  const handleDayChange = (day: Date) => {
    if (day > new Date()) {
      return;
    }

    const range = DateUtils.addDayToRange(day, customRange);
    setCustomRange(range);
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

  const [getDeviceData, { data: devicesData, loading: devicesDataLoading }] = useGetDeviceDataLazyQuery({
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (selectedDevice?.value != null && customRange != null) {
      getDeviceData({
        variables: {
          id: selectedDevice.value,
          startTs: customRange.from,
          endTs: customRange.to,
          interval: 60 * 60 * 1000,
        },
      });
    }
  }, [devices?.devices, selectedDevice?.value, customRange?.from, customRange?.to]);

  const scores = devicesData?.device_data?.data?.find((it) => it.type == "score")?.values;
  const scoreAvg = useMemo(() => {
    if (!scores) return 0;
    let sum = 0;
    scores?.forEach((it) => (sum += it.value));
    return sum / scores?.length;
  }, [scores]);

  return (
    <>
      <Head>
        <title>{t("title_report_data_page")}</title>
      </Head>
      <HeadingDiv>
        <Heading dashboard>{t("report_data_heading")}</Heading>
        <Filter
          filterOptions={devices?.devices.map((device) => ({ value: device.id, label: device.title }))}
          onChange={(value) => setSelectedDevice(value)}
          filterValue={selectedDevice}
          isLoading={devicesLoading}
        />
        <Button onClick={() => setCustomOpen(true)}>
          {customRange?.from
            ? (customRange?.from?.toLocaleString() ?? "x") + "-" + (customRange?.to?.toLocaleString() ?? "x")
            : "Nastavit datum"}
        </Button>
      </HeadingDiv>
      {devicesDataLoading && "Loading..."}
      {customOpen && (
        <div ref={calendarRef}>
          <Calendar
            isRange
            onDayClick={(day: Date) => handleDayChange(day)}
            selectedDays={customRange}
            onSubmit={() => setCustomOpen(false)}
          />
        </div>
      )}
      <Cards>
        <ReportCard subheading="CO2" data={devicesData?.device_data?.data?.find((it) => it.type == "CO2")} />
        <ReportCard
          subheading={t("dashboard_temperature")}
          data={devicesData?.device_data?.data?.find((it) => it.type == "temperature")}
        />
        <ScoreAllCard subheading={t("report_data_score_all")} score={Math.round(scoreAvg)} />
      </Cards>
    </>
  );
};

export default ReportData;
