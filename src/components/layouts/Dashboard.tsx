import React from "react";
import styled from "styled-components";

import Sidebar from "../modules/Sidebar";

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 0.8;
  background-color: ${(props) => props.theme.color_dashboard_background};
`;

interface Props {
  children?: React.ReactNode;
}

const Dashboard: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Sidebar />
      <Content>{children}</Content>
    </Layout>
  );
};

export default Dashboard;
