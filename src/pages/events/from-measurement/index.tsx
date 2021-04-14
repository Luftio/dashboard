import React from "react";
import Dashboard from "../../../components/layouts/Dashboard";
import EventsMeasurement from "../../../components/templates/EventsMeasurement";

const EventsMeasurementPage: React.FC = () => {
  return (
    <Dashboard>
      <EventsMeasurement />
    </Dashboard>
  );
};

export default EventsMeasurementPage;
