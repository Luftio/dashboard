import React from "react";
import { useRouter } from "next/router";

import Default from "../../components/layouts/Default";
import GetStarted from "../../components/templates/GetStarted";

const GetStartedPage: React.FC = () => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return null;
  const id: string = router.query.id;
  return (
    <Default>
      <GetStarted id={id} />
    </Default>
  );
};

export default GetStartedPage;
