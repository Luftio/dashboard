import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import SidebarItem from "../elements/SidebarItem";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const DropDown = styled.ul`
  position: absolute;
  background: #fff;
  top: 61px;
  left: 0;
  width: 100%;
  z-index: 500;
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;
  padding-top: 30px;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }

    80% {
      transform: scaleY(1.01);
    }

    100% {
      transform: scaleY(1);
    }
  }
`;

const Group = styled.div`
  margin-bottom: 40px;
`;

interface Props {
  onClick: () => void;
}

const DropdownMenu: React.FC<Props> = ({ onClick }) => {
  const { t } = useTranslation<string>();

  const router = useRouter();
  const url = router.pathname.split("/")[1];

  return (
    <>
      <DropDown>
        <Group>
          <SidebarItem dropdown url="/dashboard" active={url === "dashboard" && true} icon="pie-chart" text={t("sidebar_menu_item_1")}></SidebarItem>
          <SidebarItem dropdown url="/events/from-measurement" active={url === "events" && true} icon="bell" text={t("sidebar_menu_item_2")}></SidebarItem>
          <SidebarItem dropdown url="/suggestions" active={url === "suggestions" && true} icon="file" text={t("sidebar_menu_item_3")}></SidebarItem>
          <SidebarItem dropdown url="/feedback" active={url === "feedback" && true} icon="archive" text={t("sidebar_menu_item_4")}></SidebarItem>
        </Group>
        <Group>
          <SidebarItem dropdown url="/profile" active={url === "profile" && true} icon="user" text={t("sidebar_account_item_1")}></SidebarItem>
        </Group>
        <Group>
          <SidebarItem dropdown url="/settings" active={url === "settings" && true} icon="settings" text={t("sidebar_other_item_1")}></SidebarItem>
          <SidebarItem dropdown url="/support" active={url === "support" && true} icon="info" text={t("sidebar_other_item_2")}></SidebarItem>
        </Group>
        <SidebarItem dropdown url="/sign-out" type={true} icon="log-out" text={t("sidebar_sign_out")}></SidebarItem>
      </DropDown>
      <Background onClick={onClick}></Background>
    </>
  );
};

export default DropdownMenu;
