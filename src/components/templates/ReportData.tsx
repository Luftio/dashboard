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
import moment from "moment";

const Cards = styled.div`
  display: flex;
  width: 95%;
  flex-wrap: wrap;
`;

const FilterDiv = styled.div`
  margin-right: 20px;
`;

const HeadingDiv = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

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
          interval: 24 * 3600000,
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

  const formatDate = (date: any) => {
    const dateJs = new Date(date);
    return moment(dateJs).format("DD/MM/YYYY");
  };

  return (
    <>
      <Head>
        <title>{t("title_report_data_page")}</title>
      </Head>
      <HeadingDiv>
        <Heading dashboard>{t("report_data_heading")}</Heading>
        <FilterDiv>
          <Filter
            filterOptions={devices?.devices.map((device) => ({ value: device.id, label: device.title }))}
            onChange={(value) => setSelectedDevice(value)}
            filterValue={selectedDevice}
            isLoading={devicesLoading}
          />
        </FilterDiv>
        <Button onClick={() => setCustomOpen(true)}>
          {customRange?.from
            ? (formatDate(customRange?.from) ?? "x") + " - " + (formatDate(customRange?.to) ?? "x")
            : "Nastavit datum"}
        </Button>
      </HeadingDiv>
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
        <ReportCard
          loading={devicesDataLoading}
          subheading="CO2"
          data={devicesData?.device_data?.data?.find((it) => it.type == "CO2")}
        />
        <ReportCard
          loading={devicesDataLoading}
          subheading={t("dashboard_temperature")}
          data={devicesData?.device_data?.data?.find((it) => it.type == "temperature")}
        />
        <ScoreAllCard
          loading={devicesDataLoading}
          subheading={t("report_data_score_all")}
          score={Math.round(scoreAvg)}
        />
      </Cards>
    </>
  );
};

export default ReportData;
