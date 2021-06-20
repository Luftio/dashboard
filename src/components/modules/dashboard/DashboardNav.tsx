import React from "react";
import Link from "next/link";
import styled from "styled-components";

import "../../../i18n/i18n";

import Button from "../../elements/Button";
import PulseEffect from "../../elements/PulseEffect";
import Device from "../../../types/Device";

import { useQuery } from "../../../gqless";

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
  activeDeviceId?: string;
}

const DashboardNav: React.FC<DashboardNavProps> = ({ devices, activeDeviceId }) => {
  // const query = useQuery();
  // const devices = query.devices({ id: "1" });

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
      {/* {devices?.map((device) => (
        <Link href={"/dashboard/" + device.id}>
          <Button nav active={device.id === activeDeviceId}>
            {device.title}
            {device.color == "green" && <PulseEffect green></PulseEffect>}
            {device.color == "yellow" && <PulseEffect yellow></PulseEffect>}
            {device.color == "red" && <PulseEffect red></PulseEffect>}
          </Button>
        </Link>
      ))} */}
    </Navigation>
  );
};

export default DashboardNav;
