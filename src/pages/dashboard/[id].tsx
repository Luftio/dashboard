import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";

import Dashboard from "../../components/layouts/Dashboard";
import DashboardContent from "../../components/templates/Dashboard";

const WelcomeTour = dynamic(() => import("../../components/modules/WelcomeTour"), { ssr: false });

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const id: string = typeof router.query.id === "string" ? router.query.id : "all";

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 850px)" });

  const [viewedOnboarding, setWiewedOnboarding] = useState<boolean>(false);

  useEffect(() => {
    const value = localStorage.getItem("@viewedOnboarding");

    if (value !== null) {
      setWiewedOnboarding(true);
    }
  }, []);

  return (
    <Dashboard>
      {!viewedOnboarding && !isTabletOrMobile && <WelcomeTour />}
      <DashboardContent activeDeviceId={id} />
    </Dashboard>
  );
};

export default DashboardPage;
