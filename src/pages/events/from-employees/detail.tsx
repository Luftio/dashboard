import React from "react";
import Dashboard from "../../../components/layouts/Dashboard";
import EventsFromEmployeesDetail from "../../../components/templates/EventsFromEmployeesDetail";

const EventsFromEmployeesPageDetail: React.FC = () => {
  return (
    <Dashboard>
      <EventsFromEmployeesDetail />
    </Dashboard>
  );
};

export default EventsFromEmployeesPageDetail;
