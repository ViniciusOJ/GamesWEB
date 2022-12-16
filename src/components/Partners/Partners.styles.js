import styled from "styled-components";

export const DivPartner = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

export const GridDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 320px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const PartnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    color: rgb(108, 142, 225);
    font-size: 2.3rem;
    margin: 0.5rem auto 0.5rem auto;
  }
`;

export const SpanPartner = styled.span`
  color: gray;
  font-weight: bold;
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
`;

export const PartnerText = styled.h2`
  color: rgb(108, 142, 225);
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: underline;
  margin: 1rem 0;
`;
