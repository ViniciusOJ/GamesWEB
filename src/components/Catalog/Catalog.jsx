import api from "../../../services/api";
import { useState, useEffect } from "react";
import { Gi3DGlasses } from "react-icons/gi";
import {
  CardContainer,
  DivContainer,
  Input,
  Label,
  ImgContainer,
  TextStyle,
  DivGeral,
  SpanStyle,
  UlStyle,
  LiStyle,
  ButtonStyle,
  DivButton,
  DivInput,
} from "./Catalog.styles";

function Catalog() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const [games, setGames] = useState([]);
  const [height, setHeight] = useState(40);
  const [search, setSearch] = useState("");
  const lowerSearch = search.toLocaleLowerCase();

  useEffect(() => {
    async function loadGames() {
      await api
        .get("games")
        .then((response) => setGames(response.data))
        .catch((error) => console.log(error));
    }
    loadGames();
  }, []);

  if (!games) {
    return <h1>Carregando</h1>;
  }

  const gamesFiltred = games.filter((games) =>
    games.title.toLowerCase().includes(lowerSearch)
  );

  return (
    <>
      <DivGeral>
        <TextStyle>Top games mais jogados (PC)</TextStyle>
        <DivInput>
          <Label>
            <Gi3DGlasses />
          </Label>
          <Input
            type="text"
            placeholder="Digite o nome do jogo aqui..."
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
          />
        </DivInput>
      </DivGeral>
      <DivContainer style={{ height: height + "rem" }}>
        {gamesFiltred.map((item) => {
          return (
            <CardContainer key={item.id}>
              <ImgContainer>
                {" "}
                <img src={item.thumbnail} />
              </ImgContainer>
              <SpanStyle>{item.title}</SpanStyle>
              <UlStyle>
                <LiStyle>
                  <strong>Developer:</strong> {item.developer}
                </LiStyle>
                <LiStyle>
                  <strong>Genre:</strong> {item.genre}
                </LiStyle>
                <LiStyle>
                  <strong>Platform:</strong> {item.platform}
                </LiStyle>
              </UlStyle>
              <ButtonStyle>ADICIONAR AO CARRINHO</ButtonStyle>
            </CardContainer>
          );
        })}
      </DivContainer>
      <DivButton>
        <ButtonStyle
          onClick={() => {
            if (height <= 80340) {
              setHeight(height + 60);
            } else {
              console.log("Tamanho máximo atingido");
            }
          }}
        >
          VER MAIS
        </ButtonStyle>
      </DivButton>
    </>
  );
}

export default Catalog;
