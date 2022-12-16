import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  Kart,
  DivCard,
  Person,
  LinksCards,
  DivLogo,
} from "./Navbar.style";
import LogoImg from "../../assets/logo.png";

function Navbar() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const [extendNavbar, setExtendNavbar] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    if (windowSize.width >= 768) {
      setExtendNavbar(false);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width, windowSize.height]);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/products">Games</NavbarLink>
            <NavbarLink to="/contact">Partners</NavbarLink>
            <NavbarLink to="/about">About us</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <FaTimes /> : <FaBars />}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <DivCard>
            <LinksCards>
              <Kart />
            </LinksCards>
          </DivCard>
          <DivCard>
            <Person />
          </DivCard>
          <DivLogo>
            <Logo src={LogoImg}></Logo>
          </DivLogo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/products">Games</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">Partners</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About us</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
