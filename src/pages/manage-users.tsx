import React from "react";
import Dashboard from "../components/layouts/Dashboard";
import ManageUsers from "../components/templates/ManageUsers";

const ManageUsersPage: React.FC = () => {
  return (
    <Dashboard>
      <ManageUsers />
    </Dashboard>
  );
};

export default ManageUsersPage;
