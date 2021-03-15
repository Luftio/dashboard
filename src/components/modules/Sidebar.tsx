import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import SidebarItem from "../elements/SidebarItem";

const Sidebar = styled.div`
  display: flex;
  flex: 0.2;
  flex-direction: column;
  background: ${(props) => props.theme.color_sidebar_background};
  height: 100vh;
`;

const Logo = styled.div`
  margin: 30px 0 20px 11%;
`;

const Dashboard: React.FC = ({}) => {
  const { t } = useTranslation<string>();
  const router = useRouter();

  return (
    <Sidebar>
      <Logo>
        <Image src="/static/logo.svg" alt="Luftio logo" width={120} height={45} />
      </Logo>
      <Heading sidebar>{t("sidebar_menu_heading")}</Heading>
      <SidebarItem url="/dashboard" active={router.pathname === "/dashboard" && "active"} icon="pie-chart" text={t("sidebar_menu_item_1")}></SidebarItem>
      <SidebarItem url="/events/from-measurement" active={(router.pathname === "/events/from-measurement" || router.pathname === "/events/from-employees") && "active"} icon="bell" text={t("sidebar_menu_item_2")}></SidebarItem>
      <SidebarItem url="/suggestions" active={router.pathname === "/suggestions" && "active"} icon="file" text={t("sidebar_menu_item_3")}></SidebarItem>
      <SidebarItem url="/feedback" active={router.pathname === "/feedback" && "active"} icon="archive" text={t("sidebar_menu_item_4")}></SidebarItem>
      <Heading sidebar>{t("sidebar_account_heading")}</Heading>
      <SidebarItem url="/profile" active={router.pathname === "/profile" && "active"} icon="user" text={t("sidebar_account_item_1")}></SidebarItem>
      <Heading sidebar>{t("sidebar_other_heading")}</Heading>
      <SidebarItem url="/settings" active={router.pathname === "/settings" && "active"} icon="settings" text={t("sidebar_other_item_1")}></SidebarItem>
      <SidebarItem url="/support" active={router.pathname === "/support" && "active"} icon="info" text={t("sidebar_other_item_2")}></SidebarItem>
      <SidebarItem url="/sign-out" type icon="log-out" text={t("sidebar_sign_out")}></SidebarItem>
    </Sidebar>
  );
};

export default Dashboard;
