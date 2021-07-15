import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Dashboard from "../../components/layouts/Dashboard";
import DashboardContent from "../../components/templates/Dashboard";
import WelcomeTour from "../../components/modules/WelcomeTour";

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const id: string = typeof router.query.id === "string" ? router.query.id : "all";

  const [viewedOnboarding, setWiewedOnboarding] = useState<boolean>(false);

  useEffect(() => {
    const value = localStorage.getItem("@viewedOnboarding");

    if (value !== null) {
      setWiewedOnboarding(true);
    }
  }, []);

  return (
    <Dashboard>
      {viewedOnboarding && <WelcomeTour />}
      <DashboardContent activeDeviceId={id} />
    </Dashboard>
  );
};

export default DashboardPage;
