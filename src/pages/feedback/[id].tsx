import React from "react";
import { useRouter } from "next/router";

import Dashboard from "../../components/layouts/Dashboard";
import FeedbackDetail from "../../components/templates/FeedbackDetail";

const FeedbackDetailPage: React.FC = () => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return null;
  const id: string = router.query.id;
  return (
    <Dashboard>
      <FeedbackDetail id={id} />
    </Dashboard>
  );
};

export default FeedbackDetailPage;
