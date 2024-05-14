import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import styled from "styled-components"

export default function Content(props) {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="roupas">
          <Route path="id=:id" element={<Product />} />
        </Route> */}
        <Route path="*" element={<div>Error NOT Found</div>} />
      </Routes>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  min-height: 100dvh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`
