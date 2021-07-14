import React from "react";
import Tour from "reactour";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../../components/elements/Button";
import WelcomeModalContent from "../../components/modules/WelcomeModalContent";

const WelcomeTour: React.FC = () => {
  const { t } = useTranslation<string>();

  const openedOnboarding = () => {
    localStorage.setItem("@viewedOnboarding", "true");
  };

  const steps = [
    {
      content: () => (
        <WelcomeModalContent
          heading={t("welcome_tour_1_heading")}
          text={t("welcome_tour_1_text")}
          close={() => openedOnboarding()}
        />
      ),
    },
    {
      selector: '[data-tour="pie-chart"]',
      content: () => (
        <WelcomeModalContent
          heading={t("welcome_tour_2_heading")}
          text={t("welcome_tour_2_text")}
          close={() => openedOnboarding()}
        />
      ),
    },
    {
      selector: '[data-tour="event"]',
      content: () => (
        <WelcomeModalContent
          heading={t("welcome_tour_3_heading")}
          text={t("welcome_tour_3_text")}
          close={() => openedOnboarding()}
        />
      ),
    },
    {
      selector: '[data-tour="file"]',
      content: () => (
        <WelcomeModalContent
          heading={t("welcome_tour_4_heading")}
          text={t("welcome_tour_4_text")}
          close={() => openedOnboarding()}
        />
      ),
    },
    {
      selector: '[data-tour="archive"]',
      content: () => (
        <WelcomeModalContent
          heading={t("welcome_tour_5_heading")}
          text={t("welcome_tour_5_text")}
          close={() => openedOnboarding()}
        />
      ),
    },
    {
      selector: '[data-tour="users"]',
      content: () => (
        <WelcomeModalContent
          heading={t("welcome_tour_6_heading")}
          text={t("welcome_tour_6_text")}
          close={() => openedOnboarding()}
        />
      ),
    },
  ];

  return (
    <Tour
      steps={steps}
      isOpen={true}
      onRequestClose={() => openedOnboarding()}
      showNumber={false}
      accentColor={"#031946"}
      disableInteraction={true}
      rounded={4}
      showCloseButton={false}
      prevButton={<></>}
      lastStepNextButton={<Button welcomeModal>{t("welcome_tour_finish_button")}</Button>}
      nextButton={<Button welcomeModal>{t("welcome_tour_next_button")}</Button>}
      showNavigation={false}
    />
  );
};

export default WelcomeTour;
