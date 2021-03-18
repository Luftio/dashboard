import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import SidebarItem from "../elements/SidebarItem";
import HoverMessage from "../elements/HoverMessage";
import EventsHover from "./Events/EventsHover";

const Sidebar = styled.div`
  display: flex;
  flex: 0.2;
  flex-direction: column;
  background: ${(props) => props.theme.color_sidebar_background};
  height: 100vh;

  @media only screen and (max-width: 1000px) {
    flex: 0.15;
  }
`;

const Events = styled.div`
  display: flex;
  position: relative;
`;

const Logo = styled.div`
  margin: 30px 0 20px 11%;
  position: relative;
  cursor: pointer;
  width: 140px;
`;

const Animation = styled.div`
  &:hover {
    animation: hoverShow 0.6s;
  }

  @keyframes hoverShow {
    0% {
      transform: scale(1);
      opacity: 0.3;
    }

    40% {
      transform: scale(0.98);
      opacity: 0.5;
    }

    70% {
      transform: scale(0.99);
      opacity: 0.8;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const Dashboard: React.FC = ({}) => {
  const { t } = useTranslation<string>();
  const router = useRouter();

  const [show, setShow] = useState<Boolean>(false);
  const [showMessage, setShowMessage] = useState<Boolean>(false);

  const url = router.pathname.split("/")[1];

  return (
    <Sidebar>
      <Logo onMouseEnter={() => setShowMessage(true)} onMouseLeave={() => setShowMessage(false)}>
        <Link href="/dashboard">
          <Animation>
            <Image src="/static/logo.svg" alt="Luftio logo" width={120} height={45} />
          </Animation>
        </Link>
        {showMessage && <HoverMessage>{t("logo_hover_message")}&nbsp;&nbsp;🚀</HoverMessage>}
      </Logo>
      <Heading sidebar>{t("sidebar_menu_heading")}</Heading>
      <SidebarItem url="/dashboard" active={url === "dashboard" && true} icon="pie-chart" text={t("sidebar_menu_item_1")}></SidebarItem>
      <Events onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        <SidebarItem url="/events/from-measurement" active={url === "events" && true} icon="bell" text={t("sidebar_menu_item_2")}></SidebarItem>
        {show && <EventsHover />}
      </Events>
      <SidebarItem url="/suggestions" active={url === "suggestions" && true} icon="file" text={t("sidebar_menu_item_3")}></SidebarItem>
      <SidebarItem url="/feedback" active={url === "feedback" && true} icon="archive" text={t("sidebar_menu_item_4")}></SidebarItem>
      <Heading sidebar>{t("sidebar_account_heading")}</Heading>
      <SidebarItem url="/profile" active={url === "profile" && true} icon="user" text={t("sidebar_account_item_1")}></SidebarItem>
      <Heading sidebar>{t("sidebar_other_heading")}</Heading>
      <SidebarItem url="/settings" active={url === "settings" && true} icon="settings" text={t("sidebar_other_item_1")}></SidebarItem>
      <SidebarItem url="/support" active={url === "support" && true} icon="info" text={t("sidebar_other_item_2")}></SidebarItem>
      <SidebarItem url="/sign-out" type icon="log-out" text={t("sidebar_sign_out")}></SidebarItem>
    </Sidebar>
  );
};

export default Dashboard;
