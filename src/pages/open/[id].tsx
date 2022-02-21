import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Icon } from "ts-react-feather-icons";

import DashboardContent from "../../components/templates/Dashboard";
import ThingsboardService from "../../services/ThingsboardService";
import { useEffect } from "react";

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color_dashboard_background};
`;

const Div = styled.div`
  padding: 0 40px;
  width: 100%;
  min-height: 100vh;
  overflow: scroll;
`;

const Header = styled.div`
  padding: 15px 35px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 970px) {
    flex-wrap: wrap;
  }
`;

const Heading = styled.h2`
  font-size: ${(props) => props.theme.font_size_heading};
  margin-left: 25px;
  height: 45px;
  line-height: 50px;
  flex: 1;

  @media only screen and (max-width: 970px) {
    flex: auto;
    width: 100%;
    margin-left: 0;
    order: 3;
  }
`;

const LogInButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 20px;
  }

  &:hover {
    opacity: 0.5;
  }

  @media only screen and (max-width: 970px) {
    margin-left: auto;
  }
`;

const accesses = {
  hubhub: { name: "at HubHub Prague", email: "hubhub.public@luftio.cz", password: "0S9fYKOgKGvPfoGPZondaPGce910YY2l" },
  pic: { name: "PIC", email: "pic.public@luftio.cz", password: "0S9fYKOgKGvPfoGPZondaPGce910YY2l" },
};

const OpenAccessPage: React.FC = () => {
  const router = useRouter();
  if (typeof router.query.id !== "string") return null;
  const [loaded, setLoaded] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>();

  // @ts-ignore
  const id: keyof typeof accesses = router.query.id;
  useEffect(() => {
    if (accesses[id]) {
      setCustomerName(accesses[id].name);
      localStorage.setItem("rememberMe", "false");
      ThingsboardService.getInstance()
        .loginEmail(accesses[id].email, accesses[id].password)
        .then(() => {
          setLoaded(true);
        })
        .catch((error) => {
          console.log(error);
          alert("An error occured. Please contact us at info@luftio.cz");
        });
    }
  }, []);

  const urlSearchParams = new URLSearchParams(window.location.hash.replace("#", ""));
  const params = Object.fromEntries(urlSearchParams.entries());

  return (
    <Content>
      <Header>
        <Image src="/static/logo.svg" alt="Luftio logo" width={120} height={45} />
        <Heading>{customerName}</Heading>
        <Link href="/">
          <LogInButton>
            <Icon name="log-in" />
            Log in
          </LogInButton>
        </Link>
      </Header>
      <Div>{loaded && <DashboardContent activeDeviceId={params.id} hostAccess={true} />}</Div>
    </Content>
  );
};

export default OpenAccessPage;
