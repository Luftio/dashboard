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
import ContentBlockItem from "../modules/ContentBlockItem";
import DeviceCard from "../modules/DeviceCard";

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

  ${(props) =>
    props.password &&
    css`
      border-bottom: ${(props) => props.theme.divider};
      background: #fff;
    `};
`;

const Buttons = styled.div<{ password?: boolean }>`
  display: flex;
  margin-top: 20px;

  ${(props) =>
    props.password &&
    css`
      margin-bottom: 20px;
    `};
`;

const Cards = styled.div`
  display: flex;
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

  const [name, setName] = useState<string>("Petr");
  const [surname, setSurname] = useState<string>("Novák");
  const [email, setEmail] = useState<string>("petr@novak.cz");

  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [repeatNewPassword, setRepeatNewPassword] = useState<string>("");

  const [deviceName1, setDeviceName1] = useState<string>("Meeting room");
  const [deviceName2, setDeviceName2] = useState<string>("Corridor");
  const [deviceName3, setDeviceName3] = useState<string>("Kitchen");

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
          <Expand profile>
            <InputItem expand>
              <label>{t("profile_expand_name")}</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </InputItem>
            <InputItem expand>
              <label>{t("profile_expand_surname")}</label>
              <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
            </InputItem>
            <InputItem expand>
              <label>{t("profile_expand_email")}</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputItem>
            <Buttons>
              <Button type="submit" onClick={() => setEditProfile(false)} savechanges>
                {t("profile_save_changes")}
              </Button>
              <Button onClick={() => setEditProfile(false)}>{t("profile_cancel")}</Button>
            </Buttons>
          </Expand>
        ) : (
          <Expand profile>
            <InputItem profile>
              <label>{t("profile_expand_name")}</label>
              <input type="text" defaultValue={name} />
            </InputItem>
            <InputItem profile>
              <label>{t("profile_expand_surname")}</label>
              <input type="text" defaultValue={surname} />
            </InputItem>
            <InputItem profile>
              <label>{t("profile_expand_email")}</label>
              <input type="text" defaultValue={email} />
            </InputItem>
          </Expand>
        )}
        <ContentBlockItem
          subheading={t("profile_change_password_subheading")}
          buttonText={t("profile_change_password_button_text")}
          text={t("profile_change_password_text")}
          url=""
          onClick={() => setEditPassword(!editPassword)}
          opacity={editPassword && "0"}
          cursor={editPassword && "none"}
        />
        {editPassword && (
          <Expand password>
            <InputItem expand>
              <label>{t("profile_expand_password_current")}</label>
              <input type="password" placeholder={t("profile_expand_password_current_placeholder")} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
            </InputItem>
            <InputItem expand>
              <label>{t("profile_expand_password_new")}</label>
              <input type="password" pattern="/(?=.*[a-z])(?=.*[A-Z]).{12,}/" placeholder={t("profile_expand_password_new_placeholder")} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </InputItem>
            <InputItem expand>
              <label>{t("profile_expand_password_repeat_new")}</label>
              <input type="password" placeholder={t("profile_expand_password_repeat_new_placeholder")} value={repeatNewPassword} onChange={(e) => setRepeatNewPassword(e.target.value)} />
            </InputItem>
            <Buttons password>
              <Button
                type="submit"
                background={(!repeatNewPassword || !newPassword || !currentPassword) && "rgba(3, 25, 70, 0.4)"}
                cursor={(!repeatNewPassword || !newPassword || !currentPassword) && "none"}
                onClick={() => setEditPassword(false)}
                savechanges
              >
                {t("profile_save_changes")}
              </Button>
              <Button onClick={() => setEditPassword(false)}>{t("profile_cancel")}</Button>
            </Buttons>
          </Expand>
        )}
        <ContentBlockItem
          subheading={t("profile_devices_subheading")}
          buttonText={t("profile_devices_button_text")}
          text={t("profile_devices_text")}
          url=""
          onClick={() => setEditDevices(!editDevices)}
          opacity={editDevices && "0"}
          cursor={editDevices && "none"}
        />
        <Expand>
          <Cards>
            <DeviceCard edit={editDevices} onChange={(e) => setDeviceName1(e.target.value)} name={deviceName1} label="L0135C1L" />
            <DeviceCard edit={editDevices} onChange={(e) => setDeviceName2(e.target.value)} name={deviceName2} label="T1605C1A" />
            <DeviceCard edit={editDevices} onChange={(e) => setDeviceName3(e.target.value)} name={deviceName3} label="B0105U7K" />
          </Cards>
          {editDevices && (
            <Buttons>
              <Button type="submit" onClick={() => setEditDevices(false)} savechanges>
                {t("profile_save_changes")}
              </Button>
              <Button onClick={() => setEditDevices(false)}>{t("profile_cancel")}</Button>
            </Buttons>
          )}
        </Expand>
      </ContentBlock>
    </>
  );
};

export default Settings;
