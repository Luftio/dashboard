import React from "react";
import styled from "styled-components";
import BasicText from "../../elements/BasicText";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

const Card = styled.div`
  border: ${(props) => props.theme.border_primary};
  border-radius: ${(props) => props.theme.border_radius_primary};
  padding: 15px 30px;
  width: 525px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media only screen and (max-width: 970px) {
    width: 575px;
  }
`;

const EmailVerifyCard: React.FC = () => {
  const { t } = useTranslation<string>();

  return (
    <Card>
      <BasicText verifyEmail>{t("profile_verify_email_heading")}</BasicText>
      <BasicText bottomRowProcentsName>{t("profile_verify_email_text")}</BasicText>
    </Card>
  );
};

export default EmailVerifyCard;
