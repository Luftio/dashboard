import React, { useState } from "react";
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

import { useQuery, SchemaObjectTypes } from "../../gqless";

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

  const [showModalData, setShowModalData] = useState<SchemaObjectTypes["DeviceData"] | null>(null);

  const openModal = (data: SchemaObjectTypes["DeviceData"]) => {
    setShowModalData(data);
  };

  const query = useQuery();
  const devices = query.devices_data;

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
      {query.$state.isLoading ? (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      ) : (
        <>
          <DashboardNav devices={devices} activeDeviceId={activeDevice?.id || "all"} />
          <Cards>
            {activeDevice?.data?.map((data: SchemaObjectTypes["DeviceData"]) => (
              <DashboardCard data={data} onClick={() => openModal(data)} />
            ))}
          </Cards>
        </>
      )}
      {/*activeDevice?.data != null && (
        <Cards>
          <BottomRowCard subheading={t("dashboard_events_card_subheading")} />
          <BottomRowCard feedback subheading={t("dashboard_feedback_card_subheading")} />
        </Cards>
      )*/}
      <ModalDashboard data={showModalData} handleClose={() => setShowModalData(null)} />
    </>
  );
};

export default DashboardContent;
