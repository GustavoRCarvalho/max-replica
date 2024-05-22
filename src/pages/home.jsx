import styled from "styled-components"
import { Catalog } from "../components/catalogSwiper"
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
  { title: "duna", src: duna },
  { title: "godzilla2", src: godzilla2 },
  { title: "got", src: got },
  { title: "gumball", src: gumball },
  { title: "interestelar", src: interestelar },
  { title: "joker", src: joker },
  { title: "matrix", src: matrix },
  { title: "rickAndMorty", src: rickAndMorty },
  { title: "suicideSquad", src: suicideSquad },
  { title: "theBigBang", src: theBigBang },
  { title: "theConjuring3", src: theConjuring3 },
  { title: "theFreshPrince", src: theFreshPrince },
  { title: "wonka", src: wonka },
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
