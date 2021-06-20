import React from "react";
import Dashboard from "../../../components/layouts/Dashboard";
import EventsFromMeasureDetail from "../../../components/templates/EventsFromMeasureDetail";

const EventsFromMeasurePageDetail: React.FC = () => {
  return (
    <Dashboard>
      <EventsFromMeasureDetail />
    </Dashboard>
  );
};

export default EventsFromMeasurePageDetail;
