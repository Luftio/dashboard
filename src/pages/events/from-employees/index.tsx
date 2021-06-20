import React from "react";
import Dashboard from "../../../components/layouts/Dashboard";
import EventsFromEmployees from "../../../components/templates/EventsFromEmployees";

const EventsFromEmployeesPage: React.FC = () => {
  return (
    <Dashboard>
      <EventsFromEmployees />
    </Dashboard>
  );
};

export default EventsFromEmployeesPage;
