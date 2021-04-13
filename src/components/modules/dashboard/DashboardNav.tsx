import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../../elements/Button";
import PulseEffect from "../../elements/PulseEffect";
import Device from "../../../types/Device";

const Navigation = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  padding-top: 5px;
  padding-left: 8px;
  position: relative;
  left: -8px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

interface DashboardNavProps {
  devices: Device[];
  activeDeviceId: string;
}

const DashboardNav: React.FC<DashboardNavProps> = ({ devices, activeDeviceId }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Navigation>
      {devices.map((device) => (
        <Link href={"/dashboard/" + device.id}>
          <Button nav active={device.id === activeDeviceId}>
            {device.name}
            {device.color == "green" && <PulseEffect green></PulseEffect>}
            {device.color == "yellow" && <PulseEffect yellow></PulseEffect>}
            {device.color == "red" && <PulseEffect red></PulseEffect>}
          </Button>
        </Link>
      ))}
    </Navigation>
  );
};

export default DashboardNav;
