import React from "react";
import Dashboard from "../../components/layouts/Dashboard";
import DashboardContent from "../../components/templates/Dashboard";
import { useRouter } from "next/router";

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const id: string = typeof router.query.id === "string" ? router.query.id : "all";
  return (
    <Dashboard>
      <DashboardContent activeDeviceId={id} />
    </Dashboard>
  );
};

export default DashboardPage;
