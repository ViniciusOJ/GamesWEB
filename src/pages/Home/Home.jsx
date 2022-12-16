import {
  ButtonStyle,
  ContainContainer,
  DivContainer,
  DivText,
  H1styled,
  HomeContainer,
  Image,
} from "./Home.styles";
import people from "../../assets/people.png";
import Partners from "../../components/Partners/Partners";
import Catalog from "../../components/Catalog/Catalog";


function Home() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <>
      <HomeContainer>
        <ContainContainer>
          <DivText>
            <H1styled>
              Stay update
              <br /> and more accessible
            </H1styled>
            <ButtonStyle>SAIBA MAIS</ButtonStyle>
          </DivText>
          <DivContainer>
            <Image src={people} />
          </DivContainer>
        </ContainContainer>
      </HomeContainer>
      <Catalog />
      <Partners></Partners>
    </>
  );
}

export default Home;
