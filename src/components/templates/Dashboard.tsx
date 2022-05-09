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
import EventsCard from "../modules/dashboard/EventsCard";
import FeedbackCard from "../modules/dashboard/FeedbackCard";

import { useGetDevicesDataQuery, DeviceData } from "../../graphql";
import EmptyState from "../modules/EmptyState";

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

const CardWarning = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #ffc107;
  border-radius: ${(props) => props.theme.border_radius_primary};
`;

interface DashboardContentProps {
  activeDeviceId: string;
  hostAccess: boolean;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ activeDeviceId, hostAccess }) => {
  const { t } = useTranslation();

  const [showModalData, setShowModalData] = useState<DeviceData | null>(null);

  const openModal = (data: DeviceData) => {
    setShowModalData(data);
  };

  const query = useGetDevicesDataQuery();
  const devices = query.data?.devices_data ?? [];

  let activeDevice = null;
  if (devices?.some((it: any) => it.id === activeDeviceId)) {
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
      {query.loading ? (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      ) : (
        <>
          <DashboardNav devices={devices} activeDeviceId={activeDevice?.id || "all"} hostAccess={hostAccess} />
          {devices.length === 0 && <EmptyState message={t("dashboard_empty_devices")} />}
          {activeDevice && +new Date(activeDevice.lastActivityTime) < Date.now() - 180000 && (
            <CardWarning>
              <h3>{t("dashboard_disconnected_warning_title")}</h3>
              <p>
                {t("dashboard_disconnected_warning_text") +
                  " " +
                  new Date(activeDevice.lastActivityTime).toLocaleString()}
              </p>
            </CardWarning>
          )}
          <Cards>
            {activeDevice?.data?.map((data: DeviceData, i: number) => (
              <DashboardCard key={i} data={data} onClick={() => openModal(data)} />
            ))}
          </Cards>
          {hostAccess === false && (
            <Cards>
              <EventsCard subheading={t("dashboard_events_card_subheading")} />
              <FeedbackCard subheading={t("dashboard_feedback_card_subheading")} />
            </Cards>
          )}
        </>
      )}
      <ModalDashboard
        originalData={showModalData}
        deviceId={activeDevice?.id ?? activeDeviceId}
        handleClose={() => setShowModalData(null)}
      />
    </>
  );
};

export default DashboardContent;
