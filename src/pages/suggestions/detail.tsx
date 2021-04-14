import React from "react";
import Dashboard from "../../components/layouts/Dashboard";
import SuggestionsDetail from "../../components/templates/SuggestionsDetail";

const SuggestionsDetailPage: React.FC = () => {
  return (
    <Dashboard>
      <SuggestionsDetail />
    </Dashboard>
  );
};

export default SuggestionsDetailPage;
