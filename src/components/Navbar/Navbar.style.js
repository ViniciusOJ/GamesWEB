import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #7d9fe4;
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: relative;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const Kart = styled(BsFillCartFill)`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: rgb(0, 60, 110);
  }

  @media (max-width: 257px) {
    font-size: 1rem;
  }
`;

export const Person = styled(BsFillPersonFill)`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.1s ease;

  &:hover {
    color: rgb(0, 60, 110);
  }

  @media (max-width: 257px) {
    font-size: 1rem;
  }
`;

export const LinksCards = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;

  @media (max-width: 257px) {
    padding: 0;
  }
`;

export const DivCard = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease;
  cursor: pointer;

  @media (max-width: 257px) {
    width: 1.2rem;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 5rem 1rem;
  transition: all 0.1s ease;

  &:hover {
    color: rgb(0, 60, 110);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  transition: all 0.1s ease;

  &:hover {
    color: rgb(0, 60, 110);
  }
`;

export const DivLogo = styled.div`
  margin: 10px;
  max-width: 100px;
  max-height: 40px;

  @media (max-width: 280px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 100%;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;
