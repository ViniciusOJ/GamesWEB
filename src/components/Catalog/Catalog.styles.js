import styled from "styled-components";
import line from "../../assets/tarja.webp";

export const DivGeral = styled.div`
  width: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;
  background: url(${line});
  background-repeat: no-repeat;
  background-position: left bottom;
  margin: 2rem 0;
`;

export const DivContainer = styled.div`
  max-width: 1000px;
  overflow-y: hidden;
  /*height: 29rem;*/
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.5rem, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  margin: 1rem auto 1rem auto;
  text-align: center;
  padding: 1rem;
`;

export const DivInput = styled.div`
  max-width: 60rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Label = styled.label`
  color: rgb(92, 121, 221);
  padding: 2px;
  font-size: 1.7rem;
  margin: 0 .4rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.4rem;
  border: 1px solid rgb(92, 121, 221);
  border-radius: 10px;
  font-size: 1rem;
  color: rgb(92, 121, 221);
`;

export const CardContainer = styled.div`
  height: 400px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  flex-direction: column;
  box-shadow: -17px 18px 25px -19px rgba(0, 0, 0, 0.7);
  transform: scale(0.9);
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1);
  }
`;

export const ImgContainer = styled.div`
  max-width: 100%;
  max-height: 270px;
  background-color: beige;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.7);
  }
`;

export const TextStyle = styled.h2`
  color: rgb(84, 119, 221);
  font-size: 1.5rem;
  margin: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SpanStyle = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 0.8rem;
`;

export const UlStyle = styled.ul`
  list-style: none;
  margin-top: 0.9rem;
  padding: 0.2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const LiStyle = styled.li`
  font-weight: 500;
  margin: 0.3rem;
`;

export const DivButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: center;
`;

export const ButtonStyle = styled.button`
  color: white;
  background-color: rgb(84, 119, 221);
  padding: 0.8rem 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transform: scale(0.9);
  transition: all 0.2s ease;
  margin: 5px 0;

  &:hover {
    background-color: rgb(0, 60, 110);
    transform: scale(1);
  }
`;
