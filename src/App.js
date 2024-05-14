import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Content from "./router/content"
import "swiper/css"
import "swiper/css/navigation"

function App() {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  )
}

export default App
