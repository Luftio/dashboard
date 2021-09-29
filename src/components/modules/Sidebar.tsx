import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import SidebarItem from "../elements/SidebarItem";
import Tooltip from "../elements/Tooltip";
import Notifications from "../elements/Notifications";
import EventsHover from "./events/EventsHover";

import { useGetUnreadCountsQuery } from "../../graphql";

const SidebarBlock = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  background: ${(props) => props.theme.color_sidebar_background};
  box-shadow: 3px 0 5px -6px #b9babd;
  height: 100vh;
  position: relative;

  @media only screen and (max-width: 1000px) {
    width: 15%;
  }

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;

const Wrapper = styled.div`
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

const Sidebar: React.FC = ({}) => {
  const { t } = useTranslation<string>();
  const router = useRouter();
  const url = router.pathname.split("/")[1];

  // const [show, setShow] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const query = useGetUnreadCountsQuery();

  return (
    <SidebarBlock>
      <Logo>
        <Link href="/dashboard/all">
          <Animation onMouseEnter={() => setShowMessage(true)} onMouseLeave={() => setShowMessage(false)}>
            <Image src="/static/logo.svg" alt="Luftio logo" width={120} height={45} />
          </Animation>
        </Link>
        {showMessage && <Tooltip>{t("logo_hover_message")}&nbsp;&nbsp;🚀</Tooltip>}
      </Logo>
      <Heading sidebar>{t("sidebar_menu_heading")}</Heading>
      <SidebarItem
        url="/dashboard/all"
        active={url === "dashboard" && true}
        icon="pie-chart"
        text={t("sidebar_menu_item_1")}></SidebarItem>
      <SidebarItem
        url="/events"
        active={url === "events" && true}
        icon="bell"
        text={t("sidebar_menu_item_2")}></SidebarItem>
      <Notifications sidebar amount={query.data?.events_unread_count} />
      {/* {show && (
          <EventsHover
            events_from_employees_unread_count={query.data?.events_from_employees_unread_count}
            events_from_measure_unread_count={query.data?.events_from_measure_unread_count}
          />
        )} */}
      <Wrapper>
        <SidebarItem
          url="/suggestions"
          active={url === "suggestions" && true}
          icon="file"
          text={t("sidebar_menu_item_3")}></SidebarItem>
        <Notifications sidebar amount={query.data?.suggestions_unread_count} />
      </Wrapper>
      <Wrapper>
        <SidebarItem
          url="/feedback"
          active={url === "feedback" && true}
          icon="archive"
          text={t("sidebar_menu_item_4")}></SidebarItem>
        <Notifications sidebar amount={query.data?.feedback_unread_count} />
      </Wrapper>
      <Heading sidebar>{t("sidebar_account_heading")}</Heading>
      <SidebarItem url="/profile" active={url === "profile" && true} icon="user" text={t("sidebar_account_item_1")} />
      <SidebarItem
        url="/manage-users"
        active={url === "manage-users" && true}
        icon="users"
        text={t("sidebar_account_item_2")}
      />
      <Heading sidebar>{t("sidebar_other_heading")}</Heading>
      <SidebarItem
        url="/settings"
        active={url === "settings" && true}
        icon="settings"
        text={t("sidebar_other_item_1")}
      />
      <SidebarItem url="/support" active={url === "support" && true} icon="info" text={t("sidebar_other_item_2")} />
      <SidebarItem url="/sign-out" type={true} icon="log-out" text={t("sidebar_sign_out")} />
    </SidebarBlock>
  );
};

export default Sidebar;
