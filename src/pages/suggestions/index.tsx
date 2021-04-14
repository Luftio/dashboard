import React from "react";
import Dashboard from "../../components/layouts/Dashboard";
import Suggestions from "../../components/templates/Suggestions";

const SuggestionsPage: React.FC = () => {
  return (
    <Dashboard>
      <Suggestions />
    </Dashboard>
  );
};

export default SuggestionsPage;
