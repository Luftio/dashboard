import React from "react";
import { useRouter } from "next/router";
import Dashboard from "../../../components/layouts/Dashboard";
import EventsFromEmployeesDetail from "../../../components/templates/EventsFromEmployeesDetail";

const EventsFromEmployeesPageDetail: React.FC = () => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return null;
  const id: string = router.query.id;
  return (
    <Dashboard>
      <EventsFromEmployeesDetail id={id} />
    </Dashboard>
  );
};

export default EventsFromEmployeesPageDetail;
