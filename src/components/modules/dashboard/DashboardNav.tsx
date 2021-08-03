import React from "react";
import Link from "next/link";
import styled from "styled-components";

import "../../../i18n/i18n";

import Button from "../../elements/Button";
import PulseEffect from "../../elements/PulseEffect";

import { SchemaObjectTypes } from "../../../gqless";

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
  devices: SchemaObjectTypes["Device"][];
  activeDeviceId?: string;
}

const DashboardNav: React.FC<DashboardNavProps> = ({ devices, activeDeviceId }) => {
  return (
    <Navigation>
      {devices.map((device) => (
        <Link href={"/dashboard/" + device.id}>
          <Button nav active={device.id === activeDeviceId}>
            {device.title}
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
