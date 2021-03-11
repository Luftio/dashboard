import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import ContentBlockItem from "../modules/ContentBlockItem";
import Modal from "../modules/Modal";

const Div = styled.div`
  margin: 40px 0 0 5%;
  width: 100%;
`;

const Block = styled.div`
  background: #fff;
  width: 95%;
  border-radius: ${(props) => props.theme.border_radius_primary};
  box-shadow: ${(props) => props.theme.color_block_box_shadow};
  padding: 30px 0 40px;
`;

const Settings: React.FC = () => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>{t("title_settings_page")}</title>
        <meta name="description" content={t("description_settings_page")} />
      </Head>
      <Div>
        <Heading dashboard>{t("settings_page_heading")}</Heading>
        <Block>
          <ContentBlockItem
            subheading={t("settings_delete_subheading")}
            buttonText={t("settings_delete_button_text")}
            text={t("settings_delete_text")}
            url=""
            onClick={openModal}
          />
        </Block>
      </Div>
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
