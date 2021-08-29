import React from "react";
import Dashboard from "../../components/layouts/Dashboard";
import EventsFromMeasure from "../../components/templates/EventsFromMeasure";

const EventsFromMeasurePage: React.FC = () => {
  return (
    <Dashboard>
      <EventsFromMeasure />
    </Dashboard>
  );
};

export default EventsFromMeasurePage;
