import React from "react";
import Dashboard from "../../../components/layouts/Dashboard";
import EventsDetail from "../../../components/templates/EventsDetail";

const EventsEmployeesPageDetail: React.FC = () => {
  return (
    <Dashboard>
      <EventsDetail />
    </Dashboard>
  );
};

export default EventsEmployeesPageDetail;
