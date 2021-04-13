import React, { useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Router from "next/router";

import MobileMenu from "../modules/MobileMenu";
import Sidebar from "../modules/Sidebar";
import ThingsboardService from "../../services/ThingsboardService";

const Layout = styled.div`
  display: flex;
  height: 100vh;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 0.8;
  background-color: ${(props) => props.theme.color_dashboard_background};

  @media only screen and (max-width: 1000px) {
    flex: 0.85;
  }

  @media only screen and (max-width: 850px) {
    flex: 1;
  }
`;

const Div = styled.div`
  padding-left: 5%;
  width: 100%;
  overflow: scroll;
`;

interface Props {
  children?: React.ReactNode;
}

const Dashboard: React.FC<Props> = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 850px)" });

  if (typeof window === "undefined") {
    return null;
  }
  if (!ThingsboardService.getInstance().isLoggedIn()) {
    Router.push("/");
    return null;
  }

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
