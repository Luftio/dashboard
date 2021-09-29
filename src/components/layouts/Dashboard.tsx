import React, { useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

import MobileMenu from "../modules/MobileMenu";
import Sidebar from "../modules/Sidebar";
import ThingsboardService from "../../services/ThingsboardService";

import { useGetAccountQuery } from "../../graphql";

const Layout = styled.div`
  display: flex;
  height: 100vh;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  width: 80%;
  background-color: ${(props) => props.theme.color_dashboard_background};

  @media only screen and (max-width: 1000px) {
    width: 85%;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    height: 100vh;
  }
`;

const Div = styled.div`
  padding-left: 5%;
  width: 100%;
  overflow: scroll;
`;

interface DashboardProps {
  children?: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 850px)" });

  const router = useRouter();

  const query = useGetAccountQuery();
  const user = query.data?.account;

  if (typeof window === "undefined") {
    return null;
  }

  if (!ThingsboardService.getInstance().isLoggedIn()) {
    router.push("/");
    return null;
  }

  useEffect(() => {
    if (user?.role === "user") {
      router.push("/invite/download-app");
    }
  });

  return (
    <Layout>
      {isTabletOrMobile ? <MobileMenu /> : <Sidebar />}
      <Content>
        <Div>{children}</Div>
      </Content>
    </Layout>
  );
};

export default Dashboard;
