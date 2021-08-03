import React from "react";
import { useRouter } from "next/router";
import Dashboard from "../../components/layouts/Dashboard";
import SuggestionsDetail from "../../components/templates/SuggestionsDetail";

const SuggestionsDetailPage: React.FC = () => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return null;
  const id: string = router.query.id;
  return (
    <Dashboard>
      <SuggestionsDetail id={id} />
    </Dashboard>
  );
};

export default SuggestionsDetailPage;
