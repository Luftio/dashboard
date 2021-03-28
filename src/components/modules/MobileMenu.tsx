import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import { Icon } from "ts-react-feather-icons";
import DropdownMenu from "./DropdownMenu";

const Menu = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  border-bottom: ${(props) => props.theme.border_primary};
  z-index: 10000;
`;

const Nav = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

const Click = styled.p`
  cursor: pointer;
`;

const MobileMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Menu>
        <Nav>
          <Image src="/static/logo.svg" alt="Luftio logo" width={94} height={36} />
          <Click onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "x" : "menu"} size="28" color="#000" />
          </Click>
        </Nav>
      </Menu>
      {menuOpen && <DropdownMenu onClick={() => setMenuOpen(!menuOpen)} />}
    </>
  );
};

export default MobileMenu;
