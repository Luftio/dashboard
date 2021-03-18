import React from "react";
import Dashboard from "../components/layouts/Dashboard";
import DashboardContent from "../components/templates/Dashboard";

const DashboardPage: React.FC = () => {
  return (
    <Dashboard>
      <DashboardContent />
    </Dashboard>
  );
};

export default DashboardPage;
