import React, { useState } from "react";
import Head from "next/head";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import ContentBlock from "../elements/ContentBlock";
import ContentBlockItem from "../modules/ContentBlockItem";
import Modal from "../modules/Modal";

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
      <Heading dashboard>{t("settings_page_heading")}</Heading>
      <ContentBlock>
        <ContentBlockItem subheading={t("settings_delete_subheading")} buttonText={t("settings_delete_button_text")} text={t("settings_delete_text")} url="" onClick={openModal} />
      </ContentBlock>
      <Modal showModal={showModal} setShowModal={setShowModal} subheading={t("modal_subheading")} text={t("modal_text")} buttonText={t("modal_button_text")} />
    </>
  );
};

export default Settings;
