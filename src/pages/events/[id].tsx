import React from "react";
import { useRouter } from "next/router";
import Dashboard from "../../components/layouts/Dashboard";
import EventsFromMeasureDetail from "../../components/templates/EventsFromMeasureDetail";

const EventsFromMeasurePageDetail: React.FC = () => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return null;
  const id: string = router.query.id;
  return (
    <Dashboard>
      <EventsFromMeasureDetail id={id} />
    </Dashboard>
  );
};

export default EventsFromMeasurePageDetail;
