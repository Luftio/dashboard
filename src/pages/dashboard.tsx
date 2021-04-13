import { useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard/all");
  });

  return null;
};

export default Dashboard;
