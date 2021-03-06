import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import { Button } from "../elements/Button";

const Div = styled.div`
  display: flex;

  @media only screen and (max-width: 760px) {
    display: block;
  }
`;

const EmailClients: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Div>
      <Link href="https://mail.google.com/">
        <Button email>
          <Image
            src="/static/gmail.svg"
            alt="Gmail logo"
            width={21}
            height={29}
          />
          &nbsp;&nbsp;&nbsp;{t("open_gmail")}
        </Button>
      </Link>
      <Link href="https://outlook.live.com/mail">
        <Button email>
          <Image
            src="/static/outlook.svg"
            alt="Outlook logo"
            width={21}
            height={29}
          />
          &nbsp;&nbsp;&nbsp;{t("open_outlook")}
        </Button>
      </Link>
      <Link href="https://email.seznam.cz/">
        <Button email>
          <Image
            src="/static/seznam.svg"
            alt="Seznam logo"
            width={21}
            height={29}
          />
          &nbsp;&nbsp;&nbsp;{t("open_seznam")}
        </Button>
      </Link>
    </Div>
  );
};

export default EmailClients;
