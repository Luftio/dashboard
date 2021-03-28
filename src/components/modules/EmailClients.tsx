import React from "react";
import Image from "next/image";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../elements/Button";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;

  > a {
    text-decoration: none;
  }
`;

const EmailClients: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Div>
      <a href="https://mail.google.com/">
        <Button email>
          <Image src="/static/gmail.svg" alt="Gmail logo" width={21} height={29} />
          &nbsp;&nbsp;&nbsp;{t("open_gmail")}
        </Button>
      </a>
      <a href="https://outlook.live.com/mail">
        <Button email>
          <Image src="/static/outlook.svg" alt="Outlook logo" width={21} height={29} />
          &nbsp;&nbsp;&nbsp;{t("open_outlook")}
        </Button>
      </a>
      <a href="https://email.seznam.cz/">
        <Button email>
          <Image src="/static/seznam.svg" alt="Seznam logo" width={21} height={29} />
          &nbsp;&nbsp;&nbsp;{t("open_seznam")}
        </Button>
      </a>
    </Div>
  );
};

export default EmailClients;
