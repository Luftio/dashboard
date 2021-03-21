import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../../elements/Button";
import PulseEffect from "../../elements/PulseEffect";

const Navigation = styled.div`
  display: flex;
  width: 100%;
`;

const DashboardNav: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Navigation>
      <Link href="/events/from-measurement">
        <Button nav active={true}>
          Vše
          <PulseEffect yellow></PulseEffect>
        </Button>
      </Link>
      <Link href="/events/from-employees">
        <Button nav active={router.pathname === "/events/from-measurement" && true}>
          Zasedačka
          <PulseEffect yellow></PulseEffect>
        </Button>
      </Link>
      <Link href="/events/from-measurement">
        <Button nav active={router.pathname === "/events/from-measurement" && true}>
          Chodba
          <PulseEffect green></PulseEffect>
        </Button>
      </Link>
      <Link href="/events/from-measurement">
        <Button nav active={router.pathname === "/events/from-measurement" && true}>
          Kuchyňe
          <PulseEffect red></PulseEffect>
        </Button>
      </Link>
    </Navigation>
  );
};

export default DashboardNav;
