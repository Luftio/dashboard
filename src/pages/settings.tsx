import React from "react";
import Dashboard from "../components/layouts/Dashboard";
import Settings from "../components/templates/Settings";

const SettingsPage: React.FC = () => {
  return (
    <Dashboard>
      <Settings />
    </Dashboard>
  );
};

export default SettingsPage;
