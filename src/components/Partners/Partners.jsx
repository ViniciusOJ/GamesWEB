import React from "react";
import {
  DivPartner,
  GridDiv,
  PartnerContainer,
  PartnerText,
  SpanPartner,
} from "./Partners.styles";
import { SiSteam, SiAmazon, SiEpicgames } from "react-icons/si";

const partners = [
  {
    name: "Steam",
    image: <SiSteam />,
  },
  {
    name: "Amazon",
    image: <SiAmazon />,
  },
  {
    name: "Epicgames",
    image: <SiEpicgames />,
  },
];

function Partners() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <DivPartner>
      <PartnerText>Partners</PartnerText>
      <GridDiv>
        {partners.map((item) => {
          return (
            <PartnerContainer key={item.name}>
              {item.image}
              <SpanPartner>{item.name}</SpanPartner>
            </PartnerContainer>
          );
        })}
      </GridDiv>
    </DivPartner>
  );
}

export default Partners;
