import React from "react";
import Dashboard from "../../../components/layouts/Dashboard";
import EventsEmployees from "../../../components/templates/EventsEmployees";

const EventsEmployeesPage: React.FC = () => {
  return (
    <Dashboard>
      <EventsEmployees />
    </Dashboard>
  );
};

export default EventsEmployeesPage;
