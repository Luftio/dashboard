import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import DashboardNav from "../modules/dashboard/DashboardNav";
import DashboardCard from "../modules/dashboard/DashboardCard";
import ModalDashboard from "../modules/dashboard/ModalDashboard";

const Cards = styled.div`
  display: flex;
  width: 95%;
  margin-bottom: 1.7%;
`;

const Support: React.FC = () => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>{t("title_dashboard_page")}</title>
        <meta name="description" content={t("description_dashboard_page")} />
      </Head>
      <Heading dashboard>{t("dashboard_page_heading")}</Heading>
      <DashboardNav />
      <Cards>
        <DashboardCard type="score" score={53} maxValue={83} minValue={30} change={+2} subheading={t("dashboard_score")} onClick={openModal} />
        <DashboardCard type="CO2" score={1568} maxValue={1668} minValue={621} change={-3} subheading="CO2" />
        <DashboardCard type="temperature" score={21.3} maxValue={22.5} minValue={18.7} change={+5} subheading={t("dashboard_temperature")} />
      </Cards>
      <Cards>
        <DashboardCard type="humidity" score={18.1} maxValue={51.7} minValue={18.1} change={-9} subheading={t("dashboard_humidity")} />
        <DashboardCard type="pressure" score={988} maxValue={989} minValue={976} change={+1} subheading={t("dashboard_pressure")} />
      </Cards>
      <ModalDashboard showModal={showModal} setShowModal={setShowModal} subheading={t("dashboard_score")} score={53} maxValue={83} minValue={30} change={+2} />
    </>
  );
};

export default Support;
