import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const background = keyframes`
    0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 100%;
  }

`;

export const HomeContainer = styled.div`
  height: calc(100% - 80px);
  width: 100%;
  background: linear-gradient(to right, rgb(63, 99, 217), rgb(125, 159, 228));
  background-size: 500% 100%;
  animation: ${background} 5s alternate ease-in-out infinite;
`;

export const ContainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 0.3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: calc(100% - 80px);
  }
`;

export const DivContainer = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 20rem;
  }
  @media (max-width: 320px) {
    flex-direction: column;
    width: 10rem;
  }
`;

const float = keyframes`
  0%,100%{
		transform:translatey(0)
	}
	50%{
		transform:translatey(-20px)
	}
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  animation: ${float} 3.5s ease-in-out infinite;
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const H1styled = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;

  @media (max-width: 356px) {
    font-size: 2rem;
  }

  @media (max-width: 250px) {
    font-size: 1.3rem;
  }
`;

export const ButtonStyle = styled(Link)`
  padding: 0.6rem 1rem;
  color: rgb(125, 159, 228);
  background-color: #fff;
  border: 1px solid #fff;
  width: 8rem;
  border-radius: 0.8rem;
  text-decoration: none;
  transform: scale(0.9);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1);
  }
`;
