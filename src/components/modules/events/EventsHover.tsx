import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import SidebarItem from "../../elements/SidebarItem";
import Notifications from "../../elements/Notifications";

const Div = styled.div`
  width: 300px;
  height: 80px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 4px;
  position: absolute;
  left: 65%;
  top: -65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
  padding: 45px 0;
`;

const Row = styled.div`
  display: block;
  align-items: center;
  position: relative;
`;

type EventsHoverProps = {
  events_from_measure_unread_count?: number;
  events_from_employees_unread_count?: number;
};

const EventsHover: React.FC<EventsHoverProps> = (props) => {
  const { t } = useTranslation<string>();
  const router = useRouter();

  const url = router.pathname.split("/")[2];

  return (
    <Div>
      <Row>
        <SidebarItem
          hover={true}
          url="/events/from-measurement"
          active={url === "from-measurement" && true}
          icon="activity"
          text={t("events_page_nav_measure")}></SidebarItem>
        <Notifications type amount={props.events_from_measure_unread_count} />
      </Row>
      <Row>
        <SidebarItem
          hover={true}
          url="/events/from-employees"
          active={url === "from-employees" && true}
          icon="briefcase"
          text={t("events_page_nav_employees")}></SidebarItem>
        <Notifications type amount={props.events_from_employees_unread_count} />
      </Row>
    </Div>
  );
};

export default EventsHover;
