import styled from "styled-components"
import { Catalog } from "../components/catalog"
import duna from "../assets/image/duna.png"
import godzilla2 from "../assets/image/godzilla2.png"
import got from "../assets/image/got.png"
import gumball from "../assets/image/gumball.png"
import interestelar from "../assets/image/interestelar.png"
import joker from "../assets/image/joker.png"
import matrix from "../assets/image/matrix.png"
import rickAndMorty from "../assets/image/rick-and-morty.png"
import suicideSquad from "../assets/image/suicide-squad.png"
import theBigBang from "../assets/image/the-big-bang.png"
import theConjuring3 from "../assets/image/the-conjuring3.png"
import theFreshPrince from "../assets/image/the-fresh-prince.png"
import wonka from "../assets/image/wonka.png"

const contentList = [
  { src: duna },
  { src: godzilla2 },
  { src: got },
  { src: gumball },
  { src: interestelar },
  { src: joker },
  { src: matrix },
  { src: rickAndMorty },
  { src: suicideSquad },
  { src: theBigBang },
  { src: theConjuring3 },
  { src: theFreshPrince },
  { src: wonka },
]

export const Home = () => {
  return (
    <HomeContainer>
      <Catalog title="Destaques" content={contentList} />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`
