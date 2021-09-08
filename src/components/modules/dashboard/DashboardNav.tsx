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

  :after {
    content: "";
    width: 20px;
    background: linear-gradient(90deg, transparent, #fafafa);
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

interface DashboardNavProps {
  devices: SchemaObjectTypes["Device"][];
  activeDeviceId?: string;
  hostAccess: boolean;
}

const DashboardNav: React.FC<DashboardNavProps> = ({ devices, activeDeviceId, hostAccess }) => {
  return (
    <Navigation>
      {devices.map((device) => (
        <Link href={hostAccess ? "#id=" + device.id : "/dashboard/" + device.id}>
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
