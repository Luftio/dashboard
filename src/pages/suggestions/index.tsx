import React from "react";
import Dashboard from "../../components/layouts/Dashboard";
import Suggestions from "../../components/templates/Suggestions";

const FeedbackPage: React.FC = () => {
  return (
    <Dashboard>
      <Suggestions />
    </Dashboard>
  );
};

export default FeedbackPage;
