import React from "react";
import Dashboard from "../components/layouts/Dashboard";
import Profile from "../components/templates/Profile";

const ProfilePage: React.FC = () => {
  return (
    <Dashboard>
      <Profile />
    </Dashboard>
  );
};

export default ProfilePage;
