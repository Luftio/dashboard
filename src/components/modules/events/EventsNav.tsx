import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../../elements/Button";
import Notifications from "../../elements/Notifications";

import { Icon } from "ts-react-feather-icons";

const Navigation = styled.div`
  display: flex;
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

const EventsNav: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const url = router.pathname.split("/")[2];

  return (
    <Navigation>
      <Link href="/events/from-measurement">
        <Button nav active={url === "from-measurement" && true}>
          <Icon name="activity" size="22" color={url === "from-measurement" ? "#031946" : "#838C97"} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("events_page_nav_measure")}
          <Notifications amount={2} />
        </Button>
      </Link>
      <Link href="/events/from-employees">
        <Button nav active={url === "from-employees" && true}>
          <Icon name="users" size="22" color={url === "from-employees" ? "#031946" : "#838C97"} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("events_page_nav_employees")}
        </Button>
      </Link>
    </Navigation>
  );
};

export default EventsNav;
