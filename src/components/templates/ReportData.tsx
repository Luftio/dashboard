import React, { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import ScoreAllCard from "../modules/report/ScoreAllCard";
import Filter from "../elements/Filter";

import { useGetDeviceDataLazyQuery, useGetDevicesQuery } from "../../graphql";
import ReportCard from "../modules/report/ReportCard";

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

  const [getDeviceData, { data: devicesData, loading: devicesDataLoading }] = useGetDeviceDataLazyQuery({
    fetchPolicy: "cache-and-network",
  });

  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>("");

  useEffect(() => {
    getDeviceData({ variables: { id: selectedDeviceId } });
  }, [devices?.devices, selectedDeviceId]);

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
      </HeadingDiv>
      <Cards>
        <ReportCard subheading="CO2" />
        <ReportCard subheading={t("dashboard_temperature")} />
        <ScoreAllCard subheading={t("report_data_score_all")} />
      </Cards>
    </>
  );
};

export default ReportData;
