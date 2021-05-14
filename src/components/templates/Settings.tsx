import React, { useState } from "react";
import Head from "next/head";
import styled, { css } from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import ContentBlock from "../elements/ContentBlock";
import Subheading from "../elements/Subheading";
import Button from "../elements/Button";
import BasicText from "../elements/BasicText";
import ContentBlockItem from "../modules/ContentBlockItem";
import Modal from "../modules/Modal";
import DeviceCard from "../modules/DeviceCard";
import DevicesForm from "../modules/DevicesForm";

const Devices = styled.div`
  display: flex;
  width: 85%;
  height: 150px;
  flex-direction: column;
  margin: 0 auto;
`;

const TopRowDevices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 15px;
`;

const Expand = styled.form`
  display: flex;
  width: 85%;
  flex-direction: column;
  margin: -10px auto 0 auto;
  border-bottom: ${(props) => props.theme.divider};
  margin: -70px auto 0 auto;
  padding-bottom: 45px;
`;

const Cards = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
`;

const Settings: React.FC = () => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [editDevices, setEditDevices] = useState<boolean>(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>{t("title_settings_page")}</title>
        <meta name="description" content={t("description_settings_page")} />
      </Head>
      <Heading dashboard>{t("settings_page_heading")}</Heading>
      <ContentBlock>
        <Devices>
          <TopRowDevices>
            <Subheading dashboard>{t("profile_devices_subheading")}</Subheading>
            <Button
              opacity={editDevices && "0"}
              cursor={editDevices && "none"}
              onClick={() => setEditDevices(!editDevices)}>
              {t("profile_devices_button_text")}
            </Button>
          </TopRowDevices>
          <BasicText contentBlockItem>{t("profile_devices_text")}</BasicText>
        </Devices>
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
        <ContentBlockItem
          subheading={t("settings_delete_subheading")}
          buttonText={t("settings_delete_button_text")}
          text={t("settings_delete_text")}
          url=""
          onClick={openModal}
        />
      </ContentBlock>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        subheading={t("modal_subheading")}
        text={t("modal_text")}
        buttonText={t("modal_button_text")}
      />
    </>
  );
};

export default Settings;
