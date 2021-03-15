import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../elements/Button";

import { Icon } from "ts-react-feather-icons";

const Navigation = styled.div`
  display: flex;
`;

const EventsNav: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Navigation>
      <Link href="/events/from-measurement">
        <Button nav active={router.pathname === "/events/from-measurement" && true}>
          <Icon name="activity" size="22" color={router.pathname === "/events/from-measurement" ? "#031946" : "#838C97"} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("events_page_nav_measure")}
        </Button>
      </Link>
      <Link href="/events/from-employees">
        <Button nav active={router.pathname === "/events/from-employees" && true}>
          <Icon name="users" size="22" color={router.pathname === "/events/from-employees" ? "#031946" : "#838C97"} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t("events_page_nav_employees")}
        </Button>
      </Link>
    </Navigation>
  );
};

export default EventsNav;
