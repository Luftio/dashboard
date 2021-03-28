import React, { useState } from "react";
import Head from "next/head";
import styled, { css } from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import ContentBlock from "../elements/ContentBlock";
import Subheading from "../elements/Subheading";
import InputItem from "../elements/InputItem";
import Button from "../elements/Button";
import ProfileForm from "../modules/profile/ProfileForm";
import ContentBlockItem from "../modules/ContentBlockItem";
import DeviceCard from "../modules/profile/DeviceCard";
import ChangePassword from "../modules/profile/ChangePasswordForm";
import DevicesForm from "../modules/profile/DevicesForm";

const Expand = styled.form<{ profile?: boolean; password?: boolean }>`
  display: flex;
  width: 85%;
  flex-direction: column;
  margin: -10px auto 0 auto;

  ${(props) =>
    props.profile &&
    css`
      border-bottom: ${(props) => props.theme.divider};
      margin: -70px auto 0 auto;
      padding-bottom: 45px;
    `};
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Profile = styled.div`
  display: flex;
  width: 85%;
  height: 150px;
  flex-direction: column;
  margin: 0 auto;
`;

const TopRowProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 15px;
`;

const Settings: React.FC = () => {
  const { t } = useTranslation();

  const [editPassword, setEditPassword] = useState<boolean>(false);
  const [editProfile, setEditProfile] = useState<boolean>(false);
  const [editDevices, setEditDevices] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>{t("title_profile_page")}</title>
        <meta name="description" content={t("description_profile_page")} />
      </Head>
      <Heading dashboard>{t("profile_page_heading")}</Heading>
      <ContentBlock>
        <Profile>
          <TopRowProfile>
            <Subheading dashboard>{t("profile_edit_heading")}</Subheading>
            <Button opacity={editProfile && "0"} cursor={editProfile && "none"} onClick={() => setEditProfile(!editProfile)}>
              {t("profile_edit_button_text")}
            </Button>
          </TopRowProfile>
        </Profile>
        {editProfile ? (
          <ProfileForm onClick={() => setEditProfile(false)} />
        ) : (
          <Expand profile>
            <InputItem profile>
              <label htmlFor="name">{t("profile_expand_name")}</label>
              <input id="name" type="text" defaultValue="Petr" />
            </InputItem>
            <InputItem profile>
              <label htmlFor="surname">{t("profile_expand_surname")}</label>
              <input id="surname" type="text" defaultValue="Novák" />
            </InputItem>
            <InputItem profile>
              <label htmlFor="email">{t("profile_expand_email")}</label>
              <input id="email" type="text" defaultValue="petr.novak@gmail.com" />
            </InputItem>
          </Expand>
        )}
        <ContentBlockItem subheading={t("profile_change_password_subheading")} buttonText={t("profile_change_password_button_text")} text={t("profile_change_password_text")} url="" onClick={() => setEditPassword(!editPassword)} opacity={editPassword && "0"} cursor={editPassword && "none"} />
        {editPassword && <ChangePassword onClick={() => setEditPassword(false)} />}
        <ContentBlockItem subheading={t("profile_devices_subheading")} buttonText={t("profile_devices_button_text")} text={t("profile_devices_text")} url="" onClick={() => setEditDevices(!editDevices)} opacity={editDevices && "0"} cursor={editDevices && "none"} />
        {editDevices ? (
          <DevicesForm onClick={() => setEditDevices(false)} edit={editDevices} />
        ) : (
          <Expand>
            <Cards>
              <DeviceCard nameDevice="Zasedačka" label="L0135C1L" />
              <DeviceCard nameDevice="Chodba" label="T1605C1A" />
              <DeviceCard nameDevice="Kuchyně" label="B0105U7K" />
            </Cards>
          </Expand>
        )}
      </ContentBlock>
    </>
  );
};

export default Settings;
